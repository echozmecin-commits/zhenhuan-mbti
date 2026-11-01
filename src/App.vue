<template>
  <div class="bg-parchment min-h-screen">
    <Transition name="page" mode="out-in">
      <StartPage v-if="page === 'start'" @start="startQuiz" />
      <QuestionPage
        v-else-if="page === 'quiz'"
        :currentIndex="currentIndex"
        @answer="handleAnswer"
        @back="goBack"
      />
      <ResultPage
        v-else-if="page === 'result'"
        :result="result"
        @restart="restart"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { questions } from './data/questions.js'
import { calculateScores, matchCharacter } from './utils/matching.js'
import StartPage from './components/StartPage.vue'
import QuestionPage from './components/QuestionPage.vue'
import ResultPage from './components/ResultPage.vue'

const page = ref('start')
const currentIndex = ref(0)
const answers = reactive([])
const result = ref(null)

function startQuiz() {
  page.value = 'quiz'
  currentIndex.value = 0
  answers.length = 0
}

function handleAnswer(answer) {
  const current = questions[currentIndex.value]
  // 防止过渡动画期间旧题按钮被二次点击，把答案写到新题上
  if (!current || answer.questionId !== current.id) return

  answers[currentIndex.value] = answer

  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++
  } else {
    const scores = calculateScores(answers)
    result.value = matchCharacter(scores)
    page.value = 'result'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function goBack() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function restart() {
  page.value = 'start'
  currentIndex.value = 0
  answers.length = 0
  result.value = null
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
