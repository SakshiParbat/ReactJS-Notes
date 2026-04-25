import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>Theme Is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
