<template>
  <div class="w-full max-w-md mx-auto">
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-ink/50">第 {{ current }} / {{ total }} 题</span>
      <span class="text-sm text-gold font-semibold">{{ Math.round((current / total) * 100) }}%</span>
    </div>
    <div class="w-full h-2 bg-parchment-dark rounded-full overflow-hidden">
      <div
        class="h-full bg-gradient-to-r from-crimson to-gold rounded-full transition-all duration-500 ease-out"
        :style="{ width: `${(current / total) * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true },
})
</script>
