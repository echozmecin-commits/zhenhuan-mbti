import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 相对路径：本地预览和 GitHub Pages 子路径都能直接用
  base: './',
  plugins: [vue(), tailwindcss()],
})
