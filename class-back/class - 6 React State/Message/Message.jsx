import React from 'react'
class Message extends React.Component {
    state = {
        message: "Hello....."
    }
    gmHandler = () => {
        console.log("state is updating")
        this.setState({ message: "Hello, GM" })
    }
    gnHandler = () => {
        this.setState({
            message: "Good Night - Take Rest"
        })
    }
    render() {
        console.log("render method - 1")
        return <>
            <h4>Message : {this.state.message}</h4>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </>
    }

}
export default Message