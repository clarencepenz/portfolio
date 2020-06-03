import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from '../components/portfolio/Portfolio';
import Admin from '../components/admin/Admin'
import { authCheck } from '../actions/authAction';
import Login from '../components/admin/Login';
class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <Portfolio/>
                    </React.Fragment>
                  )} />

                  <Route path="/login" component={Login}/>
                  <Route path="/admin-panel" component={Admin}/>
                {/* <Route path="/admin-panel" component={authCheck(Admin)}/> */}
            </Router>
        )
    }
}


export default Routes