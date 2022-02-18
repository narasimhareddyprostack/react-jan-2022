import React from 'react'
class Registration extends React.Component {
    state = {
        user: "",
        email: ""
    }
    userHandler = (event) => {
        /*       console.log(event);
              console.log(event.target);
              console.log(event.target.value); */
        this.setState({ user: event.target.value })
    }
    emailHanlder = (event) => {
        this.setState({ email: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return <>
            <h1>Registration Page</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>User Name</label>
                <input type="text" onChange={this.userHandler} /> <br />
                <label>Email</label>
                <input type="text" onChange={this.emailHanlder} />
                <br />
                <input type="submit" value="Registration" />
            </form>
        </>
    }
}
export default Registration