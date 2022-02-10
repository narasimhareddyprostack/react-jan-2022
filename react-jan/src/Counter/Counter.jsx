import React from 'react'
import { incrAction, decrAction } from '../redux/counter/counter.action'
import { useDispatch, useSelector } from 'react-redux'
let Counter = () => {
    let counter = useSelector((state) => {
        return state.counter;
    })
    let dispatch = useDispatch()
    let decrHandler = () => {
        //dispatch an Action
        dispatch(decrAction());
    }
    let incrHandler = () => {
        dispatch(incrAction())
    }
    return (
        <div>
            <pre>{JSON.stringify(counter)}</pre>
            <h1>Counter Value: {counter.counter}</h1>
            <button onClick={decrHandler}>DECR</button>
            <button onClick={incrHandler}>INCR</button>
        </div>
    )
}

export default Counter
