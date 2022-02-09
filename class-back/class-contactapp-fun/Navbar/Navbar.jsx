import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link className="navbar-brand" to="contact"> React Hooks  - Use State</Link>
                    <div className="ml-auto">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to="contact" className="nav-link">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="user" className="nav-link">User</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
