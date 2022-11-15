<script>
  import {Router, createHistory} from 'svelte-navigator'
  import SvelteLogo from './assets/svelte.svelte'
  import createHashSource from './hashHistory';
  import Counter from './lib/Counter.svelte'

  const history = createHistory(createHashSource());

  export let basePath
</script>

<Router history={history} basepath={basePath}>
  <SvelteLogo />

  <div class="card">
    <Counter />
  </div>

</Router>
