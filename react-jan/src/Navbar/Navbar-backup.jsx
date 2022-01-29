import React, { Component } from 'react'
class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="#">React Form Handling </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default Navbar
