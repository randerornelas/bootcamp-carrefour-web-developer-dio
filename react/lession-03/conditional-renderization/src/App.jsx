import React from "react"

const buttonA = <button>Histórico de Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false

const App = () => {

    const renderShowHistory = (
        <div>
            Clique no botão para visualizar o histórico dos clientes.
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = (
        <div>
            Clique abaixo para cadastrar o cliente.
            <br />
            {buttonB}
        </div>
    )

    const customer = 'Rander Ornelas'

    const showCustomer = () => {
        if(!hasCustomer) return null

        return (
            <div>
                <h1>Nome do Cliente: {customer}</h1>
            </div>
        )
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula.</p>
            {hasCustomer ? renderShowHistory : renderAddCustomer}
            <div>
                {showCustomer()}
            </div>
        </div>
    )
}

export default App