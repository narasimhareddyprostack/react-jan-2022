import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler}>
                    <label> Email</label>
                    <input type="text" onChange={this.updateHandler} name="email" /> <br /><br />
                    <label> Password</label>
                    <input type="text" onChange={this.updateHandler} name="password" /><br /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login
