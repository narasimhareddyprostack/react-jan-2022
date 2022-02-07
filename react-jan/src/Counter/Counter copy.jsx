import React, { useState } from 'react'
let Counter = () => {
    let [qty, setQyt] = useState(1)
    return <>
        <h1>Counter Value:{qty} </h1>
        <button onClick={() => {
            setQyt(qty - 1)
        }}> Decr </button>
        <button onClick={() => {
            setQyt(qty + 1)
        }}> INCR</button>
    </>
}
export default Counter