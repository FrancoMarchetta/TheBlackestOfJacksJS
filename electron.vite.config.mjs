import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    build: { 
      outDir: 'dist/renderer',
      assetsDir: 'assets', //  <-- Nombre de la carpeta para los assets en la build
      copyPublicDir: true, 
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/renderer/index.html')
        },
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    },
  },
})