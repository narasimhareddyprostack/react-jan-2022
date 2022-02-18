import React, { useState, useEffect } from 'react'
let Message = () => {
    let [msg, SetMsg] = useState("Hello");
    useEffect(() => {
        console.log("Birth");
        return () => {
            console.log("death")
        }
    }, []);
    return <div>
        <h1>Message : {msg}</h1>
        <button onClick={() => {
            SetMsg("Good Morning")
        }}>Please Update</button>
    </div>
}
export default Message 