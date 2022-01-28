import React, { Component } from 'react'

class Employee extends Component {
    employee_Data = [{ id: 101, name: "Rahul Gandhi", email: 45000 },
    { id: 102, name: "Sonia Gandhi", email: 55000 },
    { id: 103, name: "Priyanka Gandhi", email: 65000 }]
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-10">
                            <table className="table table-hover">
                                <thead className="bg-dark">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </thead>
                                <tbody>
                                    {this.employee_Data.map((emp) => {
                                        return <tr>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Employee
