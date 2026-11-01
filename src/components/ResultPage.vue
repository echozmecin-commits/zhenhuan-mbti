<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-10 md:py-16">
    <div class="max-w-lg w-full">
      <!-- Header decoration -->
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="h-px w-12 bg-gold"></div>
        <div class="text-gold">&#10022;</div>
        <div class="h-px w-12 bg-gold"></div>
      </div>

      <p class="text-center text-sm text-ink/40 tracking-widest mb-2">你的后宫人格是</p>

      <!-- Character name -->
      <h1 class="text-center text-4xl md:text-5xl font-bold text-crimson mb-2 tracking-wider">
        {{ result.character.name }}
      </h1>

      <!-- Code -->
      <p class="text-center text-sm text-ink/70 font-semibold tracking-[0.2em] mb-4">
        角色代号 {{ result.character.code }} <span class="font-normal tracking-normal">· 非严格 MBTI</span>
      </p>

      <!-- Title -->
      <p class="text-center text-ink/60 text-lg mb-8 italic">
        「{{ result.character.title }}」
      </p>

      <!-- Radar chart -->
      <div class="flex justify-center mb-8">
        <svg
          viewBox="0 0 300 300"
          class="w-64 h-64 md:w-72 md:h-72"
          role="img"
          aria-labelledby="radarTitle radarDesc"
        >
          <title id="radarTitle">五维性格雷达图</title>
          <desc id="radarDesc">对比你的五维得分与{{ result.character.name }}的角色设定；维度为权谋、情感、联盟、意志、欲望。</desc>
          <!-- Background pentagons -->
          <polygon
            v-for="level in [1, 0.75, 0.5, 0.25]"
            :key="level"
            :points="pentagonPoints(level)"
            fill="none"
            :stroke="level === 1 ? '#C9A96E' : '#C9A96E40'"
            stroke-width="1"
          />
          <!-- Axis lines -->
          <line
            v-for="(_, i) in 5"
            :key="'axis-' + i"
            :x1="150"
            :y1="150"
            :x2="axisPoint(i, 1).x"
            :y2="axisPoint(i, 1).y"
            stroke="#C9A96E30"
            stroke-width="1"
          />
          <!-- Character polygon -->
          <polygon
            :points="characterPoints"
            fill="rgba(139, 0, 0, 0.15)"
            stroke="#8B0000"
            stroke-width="2"
          />
          <!-- User polygon -->
          <polygon
            :points="userPoints"
            fill="rgba(201, 169, 110, 0.2)"
            stroke="#C9A96E"
            stroke-width="2"
            stroke-dasharray="6 3"
          />
          <!-- Dots on user polygon -->
          <circle
            v-for="(pt, i) in userPointsList"
            :key="'dot-' + i"
            :cx="pt.x"
            :cy="pt.y"
            r="4"
            fill="#C9A96E"
          />
          <!-- Labels -->
          <text
            v-for="(label, i) in radarLabels"
            :key="'label-' + i"
            :x="labelPoint(i).x"
            :y="labelPoint(i).y"
            text-anchor="middle"
            dominant-baseline="middle"
            class="text-xs fill-ink/60"
            font-family="'Noto Serif SC', serif"
          >
            {{ label }}
          </text>
        </svg>
      </div>

      <!-- Legend -->
      <div class="flex justify-center gap-6 mb-8 text-xs text-ink/50">
        <div class="flex items-center gap-2">
          <div class="w-4 h-0.5 bg-crimson"></div>
          <span>{{ result.character.name }}</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-4 border-t-2 border-dashed border-gold"></div>
          <span>你</span>
        </div>
      </div>

      <!-- Poem -->
      <div class="text-center py-6 border-y border-gold/20 mb-8">
        <p class="text-ink/50 text-base italic tracking-wider">
          {{ result.character.poem }}
        </p>
      </div>

      <!-- Description -->
      <div class="bg-white/40 border border-gold/20 rounded-sm p-6 mb-6">
        <h3 class="text-crimson font-semibold mb-3 flex items-center gap-2">
          <span class="text-gold">&#9830;</span> 性格解读
        </h3>
        <p class="text-ink/70 leading-relaxed text-sm">
          {{ result.character.description }}
        </p>
      </div>

      <!-- Quote -->
      <div class="bg-crimson/5 border-l-4 border-crimson rounded-r-sm p-5 mb-6">
        <p class="text-ink/60 text-sm mb-1">经典台词</p>
        <p class="text-crimson font-semibold text-lg italic">
          「{{ result.character.quote }}」
        </p>
      </div>

      <!-- Guide -->
      <div class="bg-gold/5 border border-gold/20 rounded-sm p-5 mb-6">
        <h3 class="text-gold-light font-semibold mb-2 text-sm flex items-center gap-2">
          <span>&#128161;</span> 后宫生存指南
        </h3>
        <p class="text-ink/60 text-sm leading-relaxed">
          {{ result.character.guide }}
        </p>
      </div>

      <!-- Similar characters -->
      <div class="bg-white/40 border border-gold/20 rounded-sm p-5 mb-8">
        <h3 class="text-ink/70 font-semibold mb-2 text-sm">气质相近的角色（编辑精选）</h3>
        <div class="flex gap-3">
          <span
            v-for="name in result.character.similar"
            :key="name"
            class="px-4 py-2 bg-parchment-dark text-ink/60 text-sm rounded-sm"
          >
            {{ name }}
          </span>
        </div>
      </div>

      <!-- Dimension scores -->
      <div class="bg-white/40 border border-gold/20 rounded-sm p-5 mb-8">
        <h3 class="text-ink/70 font-semibold mb-4 text-sm">五维得分详情</h3>
        <div class="space-y-3">
          <div v-for="(dim, key) in dimensionDetails" :key="key" class="flex items-center gap-3">
            <span class="text-sm text-ink/50 w-10">{{ dim.label }}</span>
            <div class="flex-1 h-3 bg-parchment-dark rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-700"
                :class="dim.score >= 9 ? 'bg-crimson' : dim.score >= 6 ? 'bg-gold' : 'bg-ink/20'"
                :style="{ width: `${(dim.score / 12) * 100}%` }"
              ></div>
            </div>
            <span class="text-sm text-ink/50 w-8 text-right">{{ dim.score }}</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col gap-3 items-center">
        <button
          @click="copyResult"
          class="w-full max-w-xs py-3 px-6 bg-crimson text-parchment font-semibold tracking-wider rounded-sm transition-all hover:bg-crimson-light hover:shadow-md active:scale-95"
        >
          {{ copied ? '已复制链接!' : '分享结果' }}
        </button>
        <p v-if="shareError" class="text-xs text-crimson" role="alert">{{ shareError }}</p>
        <span class="sr-only" role="status" aria-live="polite">{{ copied ? '结果和链接已复制' : '' }}</span>
        <button
          @click="$emit('restart')"
          class="w-full max-w-xs py-3 px-6 border-2 border-crimson/30 text-crimson font-semibold tracking-wider rounded-sm transition-all hover:bg-crimson/5 active:scale-95"
        >
          重新测试
        </button>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-center gap-3 mt-10 mb-4">
        <div class="h-px w-12 bg-gold/30"></div>
        <div class="text-gold/30">&#10022;</div>
        <div class="h-px w-12 bg-gold/30"></div>
      </div>
      <p class="text-center text-xs text-ink/20 mb-4">甄嬛传后宫性格测试 &middot; 仅供娱乐</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { dimensionLabels } from '../data/characters.js'

const props = defineProps({
  result: { type: Object, required: true },
})

defineEmits(['restart'])

const copied = ref(false)
const shareError = ref('')

const radarLabels = ['权谋', '情感', '联盟', '意志', '欲望']
const dims = ['P', 'E', 'A', 'W', 'D']

const dimensionDetails = computed(() => {
  const details = {}
  dims.forEach((key, i) => {
    details[key] = {
      label: dimensionLabels[key],
      score: props.result.userVector[i],
    }
  })
  return details
})

function axisPoint(index, scale) {
  const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2
  const radius = 110 * scale
  return {
    x: 150 + radius * Math.cos(angle),
    y: 150 + radius * Math.sin(angle),
  }
}

function labelPoint(index) {
  const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2
  const radius = 135
  return {
    x: 150 + radius * Math.cos(angle),
    y: 150 + radius * Math.sin(angle),
  }
}

function pentagonPoints(scale) {
  return Array.from({ length: 5 }, (_, i) => {
    const pt = axisPoint(i, scale)
    return `${pt.x},${pt.y}`
  }).join(' ')
}

const characterPoints = computed(() => {
  const vec = props.result.character.vector
  return vec
    .map((val, i) => {
      const scale = val / 12
      const pt = axisPoint(i, scale)
      return `${pt.x},${pt.y}`
    })
    .join(' ')
})

const userPointsList = computed(() => {
  return props.result.userVector.map((val, i) => {
    const scale = val / 12
    return axisPoint(i, scale)
  })
})

const userPoints = computed(() => {
  return userPointsList.value.map((pt) => `${pt.x},${pt.y}`).join(' ')
})

async function copyResult() {
  shareError.value = ''
  const url = window.location.href
  const text = `【甄嬛传性格测试】我是${props.result.character.name}！「${props.result.character.title}」— ${props.result.character.poem} 你是哪位？${url}`
  try {
    if (navigator.share) {
      await navigator.share({ title: '你是甄嬛传里的谁？', text, url })
    } else {
      await navigator.clipboard.writeText(text)
    }
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (error) {
    // 用户主动取消系统分享时不报错
    if (error && error.name === 'AbortError') return
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => (copied.value = false), 2000)
    } catch {
      shareError.value = '复制失败，请手动复制浏览器地址栏链接'
    }
  }
}
</script>
