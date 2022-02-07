import React, { useState } from 'react'
let Message = () => {
    let [msg, setMsg] = useState("Hello....");
    let gmHandler = () => {

        setMsg("Good Morning ... take BF")
    }
    let gnHandler = () => {
        setMsg("Good Night .. dont take food")
    }
    return <React.Fragment>
        <h2>Message Comp:::: {msg}</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>

    </React.Fragment >
}
export default Message