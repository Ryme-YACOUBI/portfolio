import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        skills: resolve(__dirname, 'skills/skills.html'),
        contact: resolve(__dirname, 'contact_me.html')
      }
    }
  }
})