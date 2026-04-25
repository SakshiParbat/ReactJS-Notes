import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'
const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is Navebar</h2>
        <h2>Very Nice Navbar</h2>
      </Navbar>
    </div>
  )
}

export default App
