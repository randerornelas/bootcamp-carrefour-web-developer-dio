import React, { useState, useEffect } from 'react'
import './IfoodCounter.css'

function IfoodCounter() {
  const [value, setValue] = useState(0)
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

  function down() {
    if(value > 0) {
      setValue(value - 1)
    }

    if(value <= 1) {
      setButtonStyle('counter-button-minus-desactive')
    }
  }

  function up() {
    setValue(value + 1)
    setButtonStyle('counter-button-minus-active')
  }

  useEffect(() => {
    document.getElementById('moeda').innerHTML = 12.00 * value
  }, [value])

  useEffect(() => {
    console.log(`o estilo atual do botão é ${buttonStyle}`)
  }, [buttonStyle])

  // Botão '-' na cor cinza quando a página é carregada com o valor 0
  useEffect(() => {
    if(value === 0) {
      setButtonStyle('counter-button-minus-desactive')
    }
  }, [])

  return (
    <>
      <div className="countex-wrapper">
        <button className={buttonStyle} onClick={down}>-</button>
        <p>{value}</p>
        <button className="counter-button-plus-active" onClick={up}>+</button>
      </div>
      <p id="moeda"></p>
    </>
  )
}

export default IfoodCounter
