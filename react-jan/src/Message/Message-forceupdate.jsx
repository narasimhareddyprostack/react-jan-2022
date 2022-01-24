import React from 'react'
class Message extends React.Component {
    message = "Hello"
    changeMessageHandler = () => {
        console.log("Test Case 3 - messaageHanlder")
        console.log(this.message, " Before Update")
        this.message = "Good Morning mr - Raj:"
        console.log(this.message, "After Update")
        this.forceUpdate()
    }
    render() {
        console.log("Test Case 2 - render");
        return <>
            <h5>Message Component</h5>
            <h2>Message: {this.message}</h2>
            <button onClick={this.changeMessageHandler}>Change Message</button>

        </>
    }
}
export default Message