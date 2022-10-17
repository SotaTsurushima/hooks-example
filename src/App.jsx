import { useState } from 'react'

function App() {
  // const [number, setNumber] = useState(0)

  const handleChangeNum = () => {
    
  }

  return (
    <div className="App">
      <input type="text" onClick={(event) => setNumber(event.target.value)}/>
    </div>
  )
}

export default App
