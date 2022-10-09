<script>
  import {Router} from 'svelte-navigator'
  import SvelteLogo from './assets/svelte.svelte'
  import Counter from './lib/Counter.svelte'

  export let baseUrl
</script>

<Router basepath={baseUrl}>
  <SvelteLogo />

  <div class="card">
    <Counter />
  </div>

</Router>
