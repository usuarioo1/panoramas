import { useState } from 'react'

import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import About from './components/About'
import Panoramas from './components/Panoramas'
import Kpanoramas from './components/Kpanoramas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar />
      <About />
      <h1>hola</h1>
      <Panoramas />
      <Kpanoramas />
      
    </>
  )
}

export default App
