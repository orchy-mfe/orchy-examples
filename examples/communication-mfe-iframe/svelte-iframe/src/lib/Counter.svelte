<script>
  let message, receivedMessage = ''
  const increment = () => {
    parent.postMessage({value: message, sender: 'iframe'}, '*')
  }
  window.onmessage = ({data}) => {
    if(data.sender === 'react')
      receivedMessage = data.value
  }
</script>

<div>
  <input type="text" bind:value={message} style="width: 100%; margin-bottom: 16px">
  <button on:click={increment}>
   Send message
  </button>
  Received message: {receivedMessage}
</div>