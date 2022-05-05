import { useState } from 'react'

function SmartCounter() {
  const [quant, setQuant] = useState(1)

  return (
    <>
      <h1>{quant}</h1>
      <button onClick={() => setQuant(quant + 1)}>Aumentar</button>
    </>
  )
}

export default SmartCounter
