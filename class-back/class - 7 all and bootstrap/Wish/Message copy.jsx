import React from 'react'
class Message extends React.Component {
    constructor(props) {
        super(props);
        console.log("First - Const")
        this.state = {
            message: "Hello............."
        }
    }
    gmHandler = () => {
        this.setState({ message: "Good Morning" })
    }
    gaHandler = () => {
        this.setState({ message: "Good Afternoon" })
    }
    gnHandler = () => {
        this.setState({ message: "Good Night" })
    }
    render() {
        console.log("Second -Render method()")
        return <React.Fragment>
            <h3>Message Value:{this.state.message}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.gnHandler}>GN</button>
        </React.Fragment>
    }
}
export default Message