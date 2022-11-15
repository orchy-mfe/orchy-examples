<script>
  import {Router} from 'svelte-navigator'
  import SvelteLogo from './assets/svelte.svelte'
  import Counter from './lib/Counter.svelte'

  export let basePath
</script>

<Router basepath={basePath}>
  <SvelteLogo />

  <div class="card">
    <Counter />
  </div>

</Router>
