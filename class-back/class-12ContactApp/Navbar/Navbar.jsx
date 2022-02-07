import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="contact"> React Contact App</Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="contact" className="nav-link">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
