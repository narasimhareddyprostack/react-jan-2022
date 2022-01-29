import React from 'react'
import Navbar from './Navbar/Navbar'
import Services from './TestComp/Services'
import Contact from './TestComp/Contact'
import SMS from './SMSApp/SMS'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/product" component={Contact} />
                    <Route path="/sms" component={SMS} />
                </Switch>
            </Router>
        </>
    }
}
export default App