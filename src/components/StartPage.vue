<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
      <div class="absolute top-10 left-10 text-9xl text-crimson font-serif">宫</div>
      <div class="absolute bottom-10 right-10 text-9xl text-crimson font-serif">嬛</div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 text-center max-w-lg">
      <!-- Decorative top border -->
      <div class="flex items-center justify-center gap-3 mb-8">
        <div class="h-px w-16 bg-gold"></div>
        <div class="text-gold text-2xl">&#10022;</div>
        <div class="h-px w-16 bg-gold"></div>
      </div>

      <h1 class="text-4xl md:text-5xl font-bold text-crimson mb-4 tracking-wide leading-tight">
        你是甄嬛传里的谁？
      </h1>

      <p class="text-lg text-ink/60 mb-2 tracking-widest">
        &#8212;&#8212; 后宫性格测试 &#8212;&#8212;
      </p>

      <p class="text-sm text-ink/40 mb-10">
        20道宫廷情境题 &middot; 23位角色匹配 &middot; 五维性格分析
      </p>

      <!-- Start button -->
      <button
        @click="$emit('start')"
        class="group relative inline-flex items-center gap-2 px-10 py-4 bg-crimson text-parchment text-lg font-semibold tracking-widest rounded-sm transition-all duration-300 hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/20 active:scale-95"
      >
        <span>开始测试</span>
        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Decorative bottom border -->
      <div class="flex items-center justify-center gap-3 mt-12">
        <div class="h-px w-16 bg-gold"></div>
        <div class="text-gold text-2xl">&#10022;</div>
        <div class="h-px w-16 bg-gold"></div>
      </div>

      <p class="text-xs text-ink/30 mt-8">
        灵感来源于甄嬛传 &middot; 仅供娱乐
      </p>
    </div>
  </div>
</template>

<script setup>
defineEmits(['start'])
</script>
