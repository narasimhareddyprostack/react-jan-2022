import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {/* <a href="#">React Routing</a> */}
                <Link to="home"> React Routing</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">          
                        
                        
                        <li className="nav-item">
                            <Link to="user" className="nav-link">User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default Navbar
