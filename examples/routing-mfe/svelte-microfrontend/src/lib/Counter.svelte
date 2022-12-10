<script>
  import { Route, useNavigate } from "svelte-navigator"

  const navigate = useNavigate()

  const changeRoute = () => {
    const nextLocation = location.hash.includes('foo') ? 'bar' : 'foo'
    navigate(nextLocation)
  }

</script>

<div class="container">
  <button on:click={changeRoute}>
    Navigate Svelte
   </button>
  <Route path="foo">
    Svelte: Foo path loaded
  </Route>
  <Route path="bar">
    Svelte: Bar path loaded
  </Route>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>