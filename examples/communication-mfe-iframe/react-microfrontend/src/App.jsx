/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import {ReactComponent as ReactLogo} from './assets/react.svg'

import './App.css'

const FAKE_BUS = {subscribe: () => ({unsubscribe: () => { }}), next: () => { }}

function App({eventBus = FAKE_BUS}) {
  const [messageContent, setMessageContent] = useState('')
  const [messageReceived, setMessageReceived] = useState('')


  useEffect(() => {
    const subscription = eventBus.subscribe(data => {
      if (data.sender === 'iframe') {
        setMessageReceived(data.value)
      }
    })
    return () => subscription.unsubscribe()
  }, [eventBus])

  const sendMessage = () => {
    eventBus.next({value: messageContent, sender: 'react'})
  }

  return (
    <div className="App">
      <ReactLogo />
      <div className="card">
        <input onChange={e => setMessageContent(e.target.value)} placeholder='Message for iframe' type='text' />
        <button onClick={sendMessage}>
          Send message to iframe
        </button>
        Message received: {messageReceived}
      </div>
    </div>
  )
}

export default App
