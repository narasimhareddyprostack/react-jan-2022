import React, { useState } from 'react'
let Message = () => {
    let [msg, setMsg] = useState("Hello....");

    return <React.Fragment>
        <h2>Message Comp:::: {msg}</h2>
        <button onClick={() => { setMsg("Hello,GM") }}>GM</button>
        <button onClick={() => { setMsg("Hello,GN") }}>GN</button>

    </React.Fragment >
}
export default Message