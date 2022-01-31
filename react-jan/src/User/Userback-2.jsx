import React from 'react'
import Axios from 'axios'
class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("First Constructor!")
        this.user = []
    }
    getData_Handler = () => {
        /*  Axios.get('https://jsonplaceholder.typicode.com/users')
             .then(()=>{})
             .catch(()=>{}) */
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
                console.log(response.data)
            })
            .catch((err) => { })
    }
    render() {
        console.log("Second Render method")
        return <React.Fragment>
            <h1>User Data</h1>
            <button onClick={this.getData_Handler}>Get Data</button>
        </React.Fragment>
    }
}
export default User