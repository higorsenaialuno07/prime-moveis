import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Separa as dependências do node_modules em um arquivo isolado (reduz caminho crítico)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})