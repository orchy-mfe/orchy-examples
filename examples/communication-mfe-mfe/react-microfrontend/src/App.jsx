/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import {ReactComponent as ReactLogo} from './assets/react.svg'

import './App.css'

const FAKE_BUS = {subscribe: () => ({unsubscribe: () => { }}), next: () => { }}

function App({eventBus = FAKE_BUS}) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const subscription = eventBus.subscribe(setCounter)
    return () => subscription.unsubscribe()
  }, [eventBus])

  const increment = () => {
    setCounter(counter => {
      eventBus.next(++counter)
      return counter
    })
  }

  return (
    <div className="App">
      <ReactLogo />
      <div className="card">
        <button onClick={increment}>
          Increment
        </button>
        Counter: {counter}
      </div>
    </div>
  )
}

export default App
