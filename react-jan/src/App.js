import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Counter from './Counter/Counter'
import Cart from './Cart/Cart'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <hr />
                <Cart />
                <hr />
                <Counter />
            </div>
        )
    }
}

export default App
