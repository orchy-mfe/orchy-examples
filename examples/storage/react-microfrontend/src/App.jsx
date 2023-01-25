/* eslint-disable react/prop-types */
import {orchyStorageEventsBuilder} from '@orchy-mfe/storage-plugin/utils'
import {useCallback, useState} from 'react'
import {ReactComponent as ReactLogo} from './assets/react.svg'

import './App.css'

const FAKE_BUS = {subscribe: () => ({unsubscribe: () => { }}), next: () => { }}

function App({eventBus = FAKE_BUS}) {
  const [storage, setStorage] = useState({})

  const saveInStorage = useCallback(() => {
    eventBus.next(orchyStorageEventsBuilder.post(storage.key, storage.value))
  }, [storage, eventBus])

  return (
    <div className="App">
      <ReactLogo />
      <div className="card">
        <input onChange={e => setStorage(storage => ({...storage, key: e.target.value}))} placeholder='key' type="text"></input>
        <input onChange={e => setStorage(storage => ({...storage, value: e.target.value}))} placeholder='value' type="text"></input>
        <button onClick={saveInStorage}>
          Save in storage
        </button>
      </div>
    </div>
  )
}

export default App
