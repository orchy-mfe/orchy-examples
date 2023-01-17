<script>
  export let eventBus = {}
  let counter = 0
  const increment = () => {
    counter++
    eventBus.next(counter)
  }
  eventBus.subscribe?.((newCounter) => {
    counter = newCounter
  })
</script>

<div style="display: flex;flex-direction: column">
  <button on:click={increment}>
   Increment Svelte
  </button>
  Counter Svelte: {counter}
</div>