import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Wish/Message'
import Employee from './Employee/Employee'
import Hike from './Hike/Hike'
import Login from './Login/Login'
class App extends React.Component {
    render() {
        return <>
            <Navbar />
            <Login />
        </>
    }
}
export default App