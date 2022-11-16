import {Route, Routes, useLocation, useNavigate, Navigate} from 'react-router-dom'
import {ReactComponent as ReactLogo} from './assets/react.svg'

import './App.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const changeRoute = () => {
    const nextLocation = location.hash.includes('foo') ? '/bar' : '/foo'
    navigate(nextLocation)
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
          <Route element={<Navigate to='/foo' />} path='*' />
        </Routes>
      </div>
    </div>
  )
}

export default App
