import { useState } from 'react'
import Gifs from "./componentes/gifs"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>
        <Gifs />
      </div>
    </>
  )
}

export default App
