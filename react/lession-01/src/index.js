import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"

import './styles.css'

const sum = (a, b) => alert(a + b)

const App = () => {
    return (
        <div className="teste">
            <h1>Hello World</h1>
            <Button onClick={() => sum(3, 7)} name="Somar"/>
            {/* <h2>Soma: {sum(3, 7)}</h2> */}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))