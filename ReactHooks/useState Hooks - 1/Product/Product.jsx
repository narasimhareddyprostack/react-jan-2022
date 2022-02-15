import React, { useState } from 'react'
let Product = () => {
    let [product, setProduct] = useState({
        name: "Iphone 12",
        price: 45000,
        qty: 1,
        image: ""
    })
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="text-white table  bg-dark">
                        <thead className="text-white">
                            <th> Product Name</th>
                            <th> Price</th>
                            <th>QTY</th>
                            <th>Total Price</th>
                        </thead>
                        <tbody >
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td> <i class="fa fa-minus-circle" onClick={decrHandler}></i>
                                    {product.qty}
                                    <i class="fa fa-plus-circle" onClick={incrHandler}></i>
                                </td>
                                <td>{product.price * product.qty}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Product