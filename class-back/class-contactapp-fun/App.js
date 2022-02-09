import React from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from './ContactApp/ContactApp'
import User from './User/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
let App = () => {
    return <React.Fragment>
        <Router>

            <Navbar />
            <Routes>
                <Route path="/contact" element={<ContactApp />} />
                <Route path="/user" element={<User />} />
            </Routes>


        </Router>
    </React.Fragment>
}
export default App