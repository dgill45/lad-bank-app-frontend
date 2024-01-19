import React, { useState } from 'react'
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App
