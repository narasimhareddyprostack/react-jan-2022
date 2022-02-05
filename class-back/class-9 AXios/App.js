import React from 'react'
import Navbar from './Navbar/Navbar'
import User from './User/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>

                    <Route path="/user" component={User} />
                </Switch>
            </Router>
        </>
    }
}
export default App