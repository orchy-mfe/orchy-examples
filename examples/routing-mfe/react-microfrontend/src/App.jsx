import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {ReactComponent as ReactLogo} from './assets/react.svg'

import './App.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const changeRoute = () => {
    const nextLoction = location.pathname.includes('foo') ? '/bar' : '/foo'
    navigate(nextLoction)
  }

  return (
    <div className="App">
      <ReactLogo />
      <div className="card">
        <button onClick={changeRoute}>
          Navigate
        </button>
        <Routes>
          <Route element={'Foo path loaded'} path='/foo' />
          <Route element={'Bar path loaded'} path='/bar' />
        </Routes>
      </div>
    </div>
  )
}

export default App