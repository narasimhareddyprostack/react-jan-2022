import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "rahul@gmail.com",
        password: ""
    }
    updateHanlder = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <>
                <div className="container mt-5">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">

                        <div className="col-md-5">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.updateHanlder} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Password" name="password" onChange={this.updateHanlder} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login
