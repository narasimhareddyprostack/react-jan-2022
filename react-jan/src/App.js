import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Wish/Message'
import Employee from './Employee/Employee'
import Hike from './Hike/Hike'
class App extends React.Component {
    render() {
        return <>
            <Navbar />
            <Employee />
        </>
    }
}
export default App