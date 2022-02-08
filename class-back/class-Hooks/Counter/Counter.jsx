import React, { useState } from 'react'
let Counter = () => {
    let [counter, setCounter] = useState(1)
    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>Counter Value : {counter}</h4>
                        </div>
                        <div className="card-body">
                            <button onClick={() => { setCounter(counter - 1) }}>DECR</button>
                            <button onClick={() => { setCounter(counter + 1) }}>INCR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Counter;