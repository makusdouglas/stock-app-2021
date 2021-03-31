import React from 'react';
import {
    Switch,
    Redirect
} from 'react-router-dom';
import DashboardModule from '../pages/DashboardModule';
import HomePage from '../pages/HomePage';
import NoPermissionPage from '../pages/NoPermissionPage';
import NotFoudPage from '../pages/NotFoudPage';
import ProfilePage from '../pages/ProfilePage';
import SignInPage from '../pages/SignInPage';
// import PrivateRoute from './PrivateRoute';
import Route from './Route';

export const DefaultRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={SignInPage} />
            <Route path='/home' exact component={HomePage} isPrivate />
            <Route path='/profile' exact component={ProfilePage} isPrivate />
            <Route path='/dashboard' exact component={DashboardModule} isPrivate />
            <Route path='/404' exact component={NotFoudPage} isPrivate />
            <Route path='/403' exact component={NoPermissionPage} isPrivate />
            <Route component={() => <Redirect to='/404' />} isPrivate undefinedRoute />
        </Switch>

    )
}