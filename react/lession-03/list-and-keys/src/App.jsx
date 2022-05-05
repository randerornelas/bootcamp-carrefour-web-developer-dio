import React from "react"

const listCustomer = [
    {
        id: 1,
        name: 'Bruno Carneiro'
    },
    {
        id: 2,
        name: 'Aline Carneiro'
    },
    {
        id: 3,
        name: 'José Oliveira'
    },
    {
        id: 4,
        name: 'Marcos André'
    }
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <li key={`customer-${customer.id}`}>{customer.name}</li>
        )
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula.</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}

export default App