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
    // Evita que o CSS bloqueie a renderização inicial da página
    cssCodeSplit: false,
    assetsInlineLimit: 4096 // Coloca pequenos assets e fontes inline, se necessário
  }
})