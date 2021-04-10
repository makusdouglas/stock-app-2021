import React from 'react';
import {
    Switch,
    Redirect,
} from 'react-router-dom';

import Application from '@Module/Application/index';
import Home from '@Module/Home';
import UserModuleRoutes from '@Module/User/Routes'
import NoPermission from '@Module/NoPermission';
import NotFoud from '@Module/NotFoud';
import SignIn from '@Module/SignIn';
import Route from '@Routes/Route';

export const DefaultRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/home' exact component={Home} isPrivate />
            <Route path='/user' component={UserModuleRoutes} isPrivate />
            <Route path='/dashboard' exact component={Application} isPrivate />
            <Route path='/404' exact component={NotFoud} isPrivate />
            <Route path='/403' exact component={NoPermission} isPrivate />
            <Route component={() => <Redirect to='/404' />} isPrivate undefinedRoute />
        </Switch>

    )
}