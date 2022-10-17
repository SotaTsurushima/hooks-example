import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  
  const handleNum = (event) => {
    setNumber(event.target.value)
    console.log(number);
  }

  return (
    <div className="App">
      <h1>useState</h1>
      <input type="text" onChange={(event) => handleNum(event)}/>
    </div>
  )
}

export default App
