import React, { Component } from 'react'

class Hike extends Component {
    state = {
        salary: 400000
    }
    setHikeHandler = (hike) => {
        console.log("Test Case 123");
        this.setState({ salary: this.state.salary + hike })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Salary:{this.state.salary}</h3>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-success mr-2" onClick={this.setHikeHandler.bind(this, 50000)}>Hike 50k</button>
                                    <button className="btn btn-primary mr-2" onClick={this.setHikeHandler.bind(this, 100000)}>Hike 100lk</button>
                                    <button className="btn btn-warning" onClick={this.setHikeHandler.bind(this, 10000)}>Hike 10k</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Hike
