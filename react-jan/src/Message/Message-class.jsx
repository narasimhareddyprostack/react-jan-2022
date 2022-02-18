import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor");
        this.state = {
            msg: "Hello"
        }
    }
    messageHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    componentDidMount() {
        console.log(" Birth : Third - componentDidMount method after render method")
    }
    componentWillUpdate() {
        console.log("Update: Executing @ time of , updating component data using setState")
    }
    componentWillUnmount() {
        console.log("Death: - compWillUnmount execute - finally ")
    }
    render() {
        console.log("Second Render method")
        return (
            <div>
                <h1>Message Component</h1>
                <h2>Message: {this.state.msg}</h2>
                <button onClick={this.messageHandler}>Please Wish Me</button>
            </div>
        )
    }
}

export default Message
