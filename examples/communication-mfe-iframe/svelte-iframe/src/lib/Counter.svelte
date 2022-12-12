<script>
  let message, receivedMessage = ''
  const sendMessage = () => {
    parent.postMessage({value: message, sender: 'iframe'}, '*')
  }
  window.onmessage = ({data}) => {
    if(data.sender === 'react')
      receivedMessage = data.value
  }
</script>

<div>
  <input type="text" bind:value={message} placeholder='Message for micro frontend' style="width: 100%; margin-bottom: 16px">
  <button on:click={sendMessage}>
   Send message to micro frontend
  </button>
  Received message: {receivedMessage}
</div>