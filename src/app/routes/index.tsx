import React from 'react';
import {
    Switch,
    Redirect
} from 'react-router-dom';
import Dashboard from '../modules/Dashboard';
import Home from '../modules/Home';
import NoPermission from '../modules/NoPermission';
import NotFoud from '../modules/NotFoud';
import Profile from '../modules/User/Profile';
import SignIn from '../modules/SignIn';
// import PrivateRoute from './PrivateRoute';
import Route from './Route';

export const DefaultRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/home' exact component={Home} isPrivate />
            <Route path='/profile' exact component={Profile} isPrivate />
            <Route path='/dashboard' exact component={Dashboard} isPrivate />
            <Route path='/404' exact component={NotFoud} isPrivate />
            <Route path='/403' exact component={NoPermission} isPrivate />
            <Route component={() => <Redirect to='/404' />} isPrivate undefinedRoute />
        </Switch>

    )
}