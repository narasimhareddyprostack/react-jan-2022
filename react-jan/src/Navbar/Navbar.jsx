import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="home" className="navbar-brand">React Class Component Life Cycle Methods</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="message" className="nav-link">Message</Link>
                        </li>
                        <li>
                            <Link to="product" className="nav-link">Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    }
}
export default Navbar