import React, { useState } from 'react'
let Registration = () => {
    let [data, setData] = useState({ user: "", email: "" })
    let userHandler = (event) => {
        setData({ ...data, user: event.target.value })
    }
    let emailHandler = (event) => { setData({ ...data, email: event.target.value }) }
    let submitHandler = (event) => {
        event.preventDefault();
        console.log(data)
    }
    return <>
        <h1>Registration Page</h1>
        <pre>{JSON.stringify(data)}</pre>
        <form onSubmit={submitHandler}>
            <label >User Name:</label>
            <input type="text" onChange={userHandler} /> <br />
            <label >Email:</label>
            <input type="text" onChange={emailHandler} /><br />
            <input type="submit" value="Regi...." />
        </form>
    </>
}
export default Registration