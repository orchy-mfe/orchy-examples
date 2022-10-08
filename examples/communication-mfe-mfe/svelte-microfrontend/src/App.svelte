<script>
  import {Router} from 'svelte-navigator'
  import SvelteLogo from './assets/svelte.svelte'
  import Counter from './lib/Counter.svelte'

  export let eventBus, baseUrl
</script>

<Router basePath={baseUrl}>
  <SvelteLogo />

  <div class="card">
    <Counter eventBus={eventBus} />
  </div>

</Router>
