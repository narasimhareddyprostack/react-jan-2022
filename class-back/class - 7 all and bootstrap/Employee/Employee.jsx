import React, { Component } from 'react'

class Employee extends Component {
    employee_Data = [{ "id": 1, "name": "Ezri", "email": "ecurmi0@simplemachines.org" },
    { "id": 2, "name": "Fawne", "email": "fsellens1@phpbb.com" },
    { "id": 3, "name": "Cybill", "email": "cstoad2@reuters.com" },
    { "id": 4, "name": "Lanni", "email": "lozintsev3@51.la" },
    { "id": 5, "name": "Giana", "email": "gstronach4@java.com" },
    { "id": 6, "name": "Micheil", "email": "mlackney5@cmu.edu" },
    { "id": 7, "name": "Kimmi", "email": "kkeysall6@wired.com" },
    { "id": 8, "name": "Zondra", "email": "zcobello7@xing.com" },
    { "id": 9, "name": "Bellina", "email": "bdurnin8@slate.com" },
    { "id": 10, "name": "Lusa", "email": "linglefield9@wunderground.com" },
    { "id": 11, "name": "Brittni", "email": "bphiliparta@webmd.com" },
    { "id": 12, "name": "Lisa", "email": "ldemeadb@histats.com" },
    { "id": 13, "name": "Baxie", "email": "bspykingsc@delicious.com" },
    { "id": 14, "name": "Remy", "email": "rstarbucked@istockphoto.com" },
    { "id": 15, "name": "Andriana", "email": "asouthcombee@disqus.com" },
    { "id": 16, "name": "Dasi", "email": "dhumesf@toplist.cz" },
    { "id": 17, "name": "Cleopatra", "email": "cmasedong@wufoo.com" },
    { "id": 18, "name": "Delbert", "email": "dbuzzingh@usatoday.com" },
    { "id": 19, "name": "Merell", "email": "mcamplingi@goo.gl" },
    { "id": 20, "name": "Liam", "email": "lsouleyj@php.net" }]
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-10">
                            <table className="table table-hover">
                                <thead className="bg-dark">
                                    <tr><th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.employee_Data.map((emp) => {
                                        return <tr key={emp.id}>
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
