<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-8 md:py-12">
    <div class="max-w-xl w-full flex flex-col flex-1">
      <!-- Progress -->
      <ProgressBar :current="currentIndex + 1" :total="questions.length" />

      <!-- Question card -->
      <div class="flex-1 flex flex-col justify-center py-8">
        <Transition name="fade" mode="out-in">
          <div :key="currentIndex" class="space-y-8">
            <!-- Question text -->
            <div class="text-center">
              <div class="inline-block px-3 py-1 bg-crimson/10 text-crimson text-xs rounded-sm mb-4 tracking-wider">
                {{ dimensionLabel }}
              </div>
              <h2 class="text-xl md:text-2xl font-semibold text-ink leading-relaxed">
                {{ currentQuestion.text }}
              </h2>
            </div>

            <!-- Options -->
            <div class="space-y-3">
              <button
                v-for="(option, idx) in currentQuestion.options"
                :key="idx"
                @click="selectOption(option)"
                class="w-full text-left p-5 border-2 border-parchment-dark rounded-sm bg-white/50 transition-all duration-200 hover:border-gold hover:bg-gold/5 hover:shadow-md active:scale-[0.98] group"
              >
                <div class="flex items-start gap-4">
                  <span class="flex-shrink-0 w-7 h-7 rounded-full border-2 border-gold/40 flex items-center justify-center text-sm text-gold/60 group-hover:border-gold group-hover:text-gold group-hover:bg-gold/10 transition-all">
                    {{ ['A', 'B', 'C'][idx] }}
                  </span>
                  <span class="text-ink/80 group-hover:text-ink transition-colors leading-relaxed">
                    {{ option.text }}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Back button -->
      <div class="flex justify-center pb-4">
        <button
          v-if="currentIndex > 0"
          @click="$emit('back')"
          class="flex items-center gap-1 text-sm text-ink/40 hover:text-ink/70 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          上一题
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { questions } from '../data/questions.js'
import { dimensionLabels } from '../data/characters.js'
import ProgressBar from './ProgressBar.vue'

const props = defineProps({
  currentIndex: { type: Number, required: true },
})

const emit = defineEmits(['answer', 'back'])

const currentQuestion = computed(() => questions[props.currentIndex])

const dimensionLabel = computed(() => {
  const dim = currentQuestion.value.dimension
  return dimensionLabels[dim]
})

function selectOption(option) {
  emit('answer', {
    questionId: currentQuestion.value.id,
    dimension: currentQuestion.value.dimension,
    score: option.score,
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
