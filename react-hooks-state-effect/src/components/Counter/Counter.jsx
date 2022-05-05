function Counter() {
  let quant = 10

  function upQuant() {
    quant = quant + 1
    document.getElementById('counter-box').innerHTML = quant
  }

  return (
    <div>
      <h1 id="counter-box">{quant}</h1>
      <button onClick={upQuant}>Aumentar</button>
    </div>
  )
}

export default Counter
