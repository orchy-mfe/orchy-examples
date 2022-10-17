/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {visualizer} from 'rollup-plugin-visualizer'
import qiankun from 'vite-plugin-qiankun'

const port = process.env.PORT || 5000

export default defineConfig(({mode}) => ({
  plugins: [
    svelte({hot: !process.env.VITEST}),
    qiankun('os', {useDevMode: true}),
    visualizer(),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/svelte-microfrontend/',
  server: {port, cors: true},
  test: {
    environment: 'jsdom',
    mockReset: true
  }
}))