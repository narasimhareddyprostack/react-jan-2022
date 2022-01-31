import React, { Component } from 'react'
import Axios from 'axios';


class User extends Component {
    constructor(props) {
        super(props);
        console.log("First Construcotr")
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ user: response.data })
            }).catch()
    }
    render() {
        console.log("Second -render()")
        return (
            <div>
                <h1>User Data</h1>
                <div className="container">
                    <pre>{JSON.stringify(this.state.user)}</pre>
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.user.map((singleUser) => {
                                            return <tr>
                                                <td>{singleUser.id}</td>
                                                <td>{singleUser.name}</td>
                                                <td>{singleUser.email}</td>

                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
