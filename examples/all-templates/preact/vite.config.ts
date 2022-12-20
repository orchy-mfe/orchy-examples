/// <reference types="vitest" />
import preact from '@preact/preset-vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import svgr from 'vite-plugin-svgr'

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001

export default defineConfig(({mode}) => ({
  plugins: [
    svgr(),
    preact(),
    cssInjectedByJsPlugin(),
    visualizer()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/preact/',
  server: {port, cors: true},
  test: {
    environment: 'jsdom',
    mockReset: true
  },
}))
