import React, { Component } from 'react'

class Registration extends Component {
    state = {
        username: ""
    }
    userNameHandler = (event) => {
        console.log(event.target.value)
        this.setState({ username: event.target.value })
    }
    submitHandler = (event) => {
        console.log(this.state)
         event.preventDefault();
    }
    render() {
        return (
            <>
                <h2>Registration Form</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler}>
                    <label >User Name :</label>

                    <input type="text" onChange={this.userNameHandler} />
                    <br />
                    <input type="submit" value="Ragistration" />
                </form>
            </>
        )
    }
}

export default Registration
