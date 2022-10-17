<script>
  import {Router, createHistory} from 'svelte-navigator'
  import SvelteLogo from './assets/svelte.svelte'
  import Counter from './lib/Counter.svelte'

  const history = createHistory(window)

  export let eventBus, baseUrl
</script>

<Router basepath={baseUrl} history={history}>
  <SvelteLogo />

  <div class="card">
    <Counter eventBus={eventBus} />
  </div>

</Router>
