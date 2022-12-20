/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'
import solidPlugin from 'vite-plugin-solid'
import solidSvg from 'vite-plugin-solid-svg'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const port = process.env.PORT || 3002

export default defineConfig(({mode}) => ({
  plugins: [
    solidSvg(),
    solidPlugin(),
    cssInjectedByJsPlugin(),
    visualizer()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/solid/',
  server: {port, cors: true},
  test: {
    mockReset: true,
    environment: 'jsdom',
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
}))