import React from 'react'
import Navbar from './Navbar/Navbar'
//import Registration from './Registration/Registration'
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