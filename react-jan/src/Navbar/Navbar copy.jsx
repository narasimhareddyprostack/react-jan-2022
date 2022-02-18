import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="#" className="navbar-brand">React Class Component Life Cycle Methods</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Message</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Product</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    }
}
export default Navbar