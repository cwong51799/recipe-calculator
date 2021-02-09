import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes.js';

export default class Navigation extends Component {
    render() {
        console.log(ROUTES.SIGN_IN)
        return (
            <div>
                <ul>
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                </li>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
                <li>
                    <SignOutButton />
                </li>
                </ul>
            </div>
        )
    }
}
