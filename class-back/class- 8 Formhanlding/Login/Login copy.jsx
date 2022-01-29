import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    emailHanlder = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordHanlder = (event) => {
        this.setState({ password: event.target.value })
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
                    <input type="text" onChange={this.emailHanlder} /> <br /><br />
                    <label> Password</label>
                    <input type="text" onChange={this.passwordHanlder} /><br /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login
