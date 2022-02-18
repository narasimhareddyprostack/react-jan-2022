import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Message from './Message/Message'
import Product from './Product/Product'
export class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>

                        <Route path="/message" element={<Message />} />
                        <Route path="/product" element={<Product />} />
                    </Routes>
                </Router>


            </div>
        )
    }
}

export default App
