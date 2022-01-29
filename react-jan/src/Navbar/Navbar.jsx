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
                            {/*   <a href="/services" className="nav-link">Services</a> */}
                            <Link to="services" className="nav-link"> Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href="product" className="nav-link">Product</a>
                        </li>
                        <li className="nav-item">
                            <Link to="sms" className="nav-link">SMS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default Navbar
