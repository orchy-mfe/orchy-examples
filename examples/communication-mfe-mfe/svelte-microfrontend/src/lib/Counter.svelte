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

<div>
  <button on:click={increment}>
   Increment
  </button>
  Counter: {counter}
</div>