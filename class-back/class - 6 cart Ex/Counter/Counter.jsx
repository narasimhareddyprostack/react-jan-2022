import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 0
    }
    incrHanlder = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrHanlder = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        console.log("Test Case - first -render()")
        return (
            <div>
                <h1> Counter Value:{this.state.counter}</h1>
                <button onClick={this.incrHanlder}> INCR</button>
                <button onClick={this.decrHanlder}> DECR</button>
            </div>
        )
    }
}

export default Counter
