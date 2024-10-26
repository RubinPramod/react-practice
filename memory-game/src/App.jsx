import { useState } from 'react'
import './App.css'
import MemoryGame from "./components/MemoryGame.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MemoryGame />
    </div>
  )
}

export default App
