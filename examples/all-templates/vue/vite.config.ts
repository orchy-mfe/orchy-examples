/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import svgLoader from "vite-svg-loader";

const port = process.env.PORT ? parseInt(process.env.PORT) : 8081;

export default defineConfig(({ mode }) => ({
  plugins: [vue(), svgLoader(), visualizer(), cssInjectedByJsPlugin()],
  base: mode === "development" ? `http://localhost:${port}/` : "/vue/",
  server: { port, cors: true },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  test: {
    environment: "happy-dom",
    mockReset: true,
  },
}));
