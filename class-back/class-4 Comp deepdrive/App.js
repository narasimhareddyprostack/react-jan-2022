import React from 'react'
import Product from './Product/Product'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {

    render() {
        return <div>
            <h1>App Component</h1>
            <hr />
            <Navbar />
            <hr />
            <Header />
            <hr />
            <Product />
            <hr />
            <Footer />

        </div>
    }
}
export default App