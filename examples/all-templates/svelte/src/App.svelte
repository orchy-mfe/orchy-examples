<script lang="ts">
  import {Router, createHistory} from 'svelte-navigator'
  import SvelteLogo from './assets/svelte.svelte'
  import ViteLogo from './assets/vite.svelte'
  import Counter from './lib/Counter.svelte'

  const history = createHistory(window)

  export let basePath
</script>

<Router basepath={basePath} history={history}>
  <div>
    <a href="https://vitejs.dev" target="_blank" class="logo" rel="noreferrer">
      <ViteLogo />
    </a>
    <a href="https://svelte.dev" target="_blank" class="logo svelte" rel="noreferrer">
      <SvelteLogo />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</Router>

<style>
  svelte-mfe-typescript .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  svelte-mfe-typescript .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  svelte-mfe-typescript .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  svelte-mfe-typescript .read-the-docs {
    color: #888;
  }
</style>