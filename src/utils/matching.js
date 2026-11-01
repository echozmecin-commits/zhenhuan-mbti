import { characters } from '../data/characters.js'

export function calculateScores(answers) {
  const dimensions = { P: 0, E: 0, A: 0, W: 0, D: 0 }
  for (const answer of answers) {
    dimensions[answer.dimension] += answer.score
  }
  return dimensions
}

function mean(vector) {
  return vector.reduce((sum, value) => sum + value, 0) / vector.length
}

function variance(vector) {
  const avg = mean(vector)
  return vector.reduce((sum, value) => sum + (value - avg) ** 2, 0) / vector.length
}

function rawDistance(a, b) {
  return a.reduce((sum, value, i) => sum + Math.abs(value - b[i]), 0)
}

/**
 * 形状距离：比较五维的相对高低，而不是绝对分数。
 * 原始曼哈顿距离会被“答题强度”带偏（总分高的角色更容易赢），
 * 1 - Pearson 相关系数只比较形状，分布更均衡；全平向量回退到原始距离。
 * 这是娱乐性启发式，不是心理学测评。
 */
function shapeDistance(a, b) {
  const meanA = mean(a)
  const meanB = mean(b)
  let numerator = 0
  let varianceA = 0
  let varianceB = 0
  for (let i = 0; i < a.length; i++) {
    const da = a[i] - meanA
    const db = b[i] - meanB
    numerator += da * db
    varianceA += da * da
    varianceB += db * db
  }
  const denominator = Math.sqrt(varianceA * varianceB)
  if (!denominator) return null
  return 1 - numerator / denominator
}

export function matchCharacter(dimensions) {
  const userVector = [dimensions.P, dimensions.E, dimensions.A, dimensions.W, dimensions.D]
  const flatProfile = variance(userVector) < 0.01

  let bestMatch = null
  let bestDistance = Infinity
  let bestRawDistance = Infinity

  for (const character of characters) {
    const raw = rawDistance(userVector, character.vector)
    const shape = shapeDistance(userVector, character.vector)
    // 全平答案没有“形状”可比，退回原始距离；否则用形状距离。
    const distance = flatProfile || shape === null ? raw : shape

    if (
      distance < bestDistance - 1e-9 ||
      (Math.abs(distance - bestDistance) <= 1e-9 && raw < bestRawDistance)
    ) {
      bestDistance = distance
      bestRawDistance = raw
      bestMatch = character
    }
  }

  return { character: bestMatch, userVector, distance: bestDistance, method: flatProfile ? 'raw' : 'shape' }
}
