import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
    emptyOutDir: true, // also necessary
  },
  plugins: [
    vue(),
  ],
})
