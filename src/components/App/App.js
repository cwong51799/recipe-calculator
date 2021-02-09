import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import { BrowserRouter as Router , Route} from 'react-router-dom';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/Admin';

import * as ROUTES from '../../constants/routes.js';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Navigation />
                <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            </Router>
        )
    }
}
