<script>
  import { Route, useNavigate } from "svelte-navigator"

  const navigate = useNavigate()

  const changeRoute = () => {
    const nextLoction = location.pathname.includes('foo') ? 'bar' : 'foo'
    navigate(nextLoction)
  }

</script>

<div class="container">
  <button on:click={changeRoute}>
    Navigate
   </button>
  <Route path="foo">
    Foo path loaded
  </Route>
  <Route path="bar">
    Bar path loaded
  </Route>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>