import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to My First React App</h1>
        <p>Learning React with Vite is fast and fun! 🚀</p>
      </div>
  )
}

export default App
