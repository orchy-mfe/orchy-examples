import {Route, Routes, useLocation, useNavigate, Navigate} from 'react-router-dom'
import {ReactComponent as ReactLogo} from './assets/react.svg'

import './App.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const changeRoute = () => {
    const nextLocation = location.pathname.includes('foo') ? '/bar' : '/foo'
    navigate(nextLocation)
  }

  return (
    <div className="App">
      <ReactLogo />
      <div className="card">
        <button onClick={changeRoute}>
          Navigate React
        </button>
        <Routes>
          <Route element={'React: Foo path loaded'} path='/foo' />
          <Route element={'React: Bar path loaded'} path='/bar' />
          <Route element={<Navigate to='/foo' />} path='*' />
        </Routes>
      </div>
    </div>
  )
}

export default App
