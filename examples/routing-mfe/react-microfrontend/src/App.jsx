import {useEffect} from 'react'
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'

import './App.css'
import {ReactComponent as ReactLogo} from './assets/react.svg'

function App({basePath}) {
  const location = useLocation()
  const navigate = useNavigate()

  const changeRoute = () => {
    const nextLocation = location.pathname.includes('foo') ? '/bar' : '/foo'
    navigate(nextLocation)
  }

  useEffect(() => {
    return () => {
      if (!window.location.hash && window.location.pathname === basePath) {
        window.location.hash = basePath
      }
    }
  }, [basePath, location, navigate])

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
