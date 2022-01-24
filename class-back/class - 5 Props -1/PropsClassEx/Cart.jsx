import React, { Component } from 'react'
class Cart extends Component {
    render() {
        return (
            <div>
                <h1>Cart Component</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Product Name:{this.props.name}</h2>
                <h3>Price:{this.props.price}</h3>
                {<h4> Color:{this.props.product_Color[1]}</h4>}
            </div>
        )
    }
}

export default Cart
