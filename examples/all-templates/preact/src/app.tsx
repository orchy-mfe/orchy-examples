import {useState} from 'preact/hooks'
import {ReactComponent as PreactLogo} from './assets/preact.svg'
import {ReactComponent as ViteLogo} from './assets/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a class="logo" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <PreactLogo />
        </a>
        <a class="logo preact" href="https://preactjs.com" target="_blank" rel="noreferrer">
          <ViteLogo />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
