import { characters } from '../data/characters.js'

export function calculateScores(answers) {
  const dimensions = { P: 0, E: 0, A: 0, W: 0, D: 0 }
  for (const answer of answers) {
    dimensions[answer.dimension] += answer.score
  }
  return dimensions
}

export function matchCharacter(dimensions) {
  const userVector = [dimensions.P, dimensions.E, dimensions.A, dimensions.W, dimensions.D]

  let bestMatch = null
  let bestDistance = Infinity

  for (const character of characters) {
    let distance = 0
    for (let i = 0; i < 5; i++) {
      distance += Math.abs(userVector[i] - character.vector[i])
    }
    if (distance < bestDistance) {
      bestDistance = distance
      bestMatch = character
    }
  }

  return { character: bestMatch, userVector, distance: bestDistance }
}
