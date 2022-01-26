import React from 'react'
class Cart extends React.Component {
    state = {
        product_Name: "DELL Inspiron Core i3 11th Gen ",
        price: 89000,
        image: "https://rukminim1.flixcart.com/image/312/312/kt8zb0w0/computer/n/m/v/inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.jpeg?q=70",
        qty: 1
    }
    incrQtyHandler = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    decrQtyHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    render() {
        return <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover">
                            <thead>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src={this.state.image} height="80px" width="80px" /></td>

                                    <td>{this.state.price}</td>
                                    <td>
                                        <i className="fa fa-minus-circle" onClick={this.decrQtyHandler}></i>
                                        {this.state.qty}
                                        <i className="fa fa-plus-circle" onClick={this.incrQtyHandler}></i>
                                    </td>
                                    <td>{this.state.qty * this.state.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
export default Cart