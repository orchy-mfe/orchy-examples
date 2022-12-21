import angular from '@analogjs/vite-plugin-angular';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

const port = process.env.PORT ? parseInt(process.env.PORT) : 4200

export default defineConfig(({ mode }) => ({
  plugins: [
    angular.default(),
    visualizer()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/angular/',
  server: { port, cors: true },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  resolve: {
    mainFields: ['module'],
  },
}));
