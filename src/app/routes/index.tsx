import React from 'react';
import {
    Switch,
    Redirect,
} from 'react-router-dom';

import AppModule from '@Module/Application/Routes';
import UserModule from '@Module/User/Routes'
import Home from '@Module/Home';
import NoPermission from '@Module/NoPermission';
import NotFoud from '@Module/NotFoud';
import SignIn from '@Module/SignIn';
import Route from '@Routes/Route';

export const DefaultRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/dashboard' component={AppModule} isPrivate />
            <Route path='/home' exact component={Home} isPrivate />
            <Route path='/user' component={UserModule} isPrivate />
            <Route path='/404' exact component={NotFoud} isPrivate />
            <Route path='/403' exact component={NoPermission} isPrivate />
            <Route component={() => <Redirect to='/404' />} isPrivate undefinedRoute />
        </Switch>

    )
}