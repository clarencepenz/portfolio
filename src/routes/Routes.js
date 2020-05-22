import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from '../components/portfolio/Portfolio';
import Admin from '../components/admin/Admin'
class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <Portfolio/>
                    </React.Fragment>
                  )} />

                  <Route path="/admin-panel" component={Admin}/>
            </Router>
        )
    }
}


export default Routes