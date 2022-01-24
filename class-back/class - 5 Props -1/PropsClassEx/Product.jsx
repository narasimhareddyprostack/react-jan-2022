import React from 'react'
import Cart from './Cart'
class Product extends React.Component {
    product_Name = "Iphone 5s"
    price = "45000"
    color = ['gold', ' blue', 'black']
    render() {
        return <div>
            <h1>Product Component</h1>
            <hr />
            <Cart name={this.product_Name}
                price={this.price}
                product_Color={this.color} />
        </div>
    }
}
export default Product