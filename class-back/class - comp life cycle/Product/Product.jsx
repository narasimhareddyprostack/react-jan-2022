import React, { Component } from 'react'
class Product extends Component {
    constructor(props) {
        super(props);
        console.log("First Constructor")
        this.state = {
            product_Name: "Iphone 5s"
        }
    }
    updateNamehandler = () => {
        this.setState({ product_Name: "Iphone 12s " });
    }
    componentDidMount() {
        console.log("Third - componentDidMount -after render method")

    }
    componentDidUpdate() {
        console.log(".....DidUpdate will execute after DidMount");
    }
    componentWillUnmount() {
        console.log("Finally It will execute");
    }
    render() {
        console.log("Sencond -Render Method");
        return (
            <div>
                <h4>Product Component</h4>
                <button onClick={this.updateNamehandler}> Change Name</button>
            </div>
        )
    }
}

export default Product
