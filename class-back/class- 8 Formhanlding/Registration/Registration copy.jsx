import React, { Component } from 'react'

class Registration extends Component {
    state = {
        username: ""
    }
    userNameHandler = (event) => {
        console.log(event);
        console.log(event.target)
        console.log(event.target.value)
    }
    render() {
        return (
            <>
                <h2>Registration Form</h2>
                <form >
                    <label >User Name</label>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <input type="text" onChange={this.userNameHandler} />
                    <br />
                    <button> Registration</button>
                </form>
            </>
        )
    }
}

export default Registration
