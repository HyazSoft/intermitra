import { useState } from 'react'
import Navbar from './layout/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <h1>First Edit</h1>
    </>
  )
}

export default App
