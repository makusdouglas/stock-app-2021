import React from 'react';
import {
    Switch,
    Redirect,
} from 'react-router-dom';

import AppModule from '@Module/Application/Routes';
import UserModule from '@Module/User/Routes'
import Home from '@Module/Home';
import SignIn from '@Module/SignIn';
import Route from '@Routes/Route';

export const DefaultRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/app' component={AppModule} isPrivate />
            <Route path='/home' exact component={Home} isPrivate />
            <Route path='/user' component={UserModule} isPrivate />
            <Route component={() => <Redirect to='/app/404' />} isPrivate undefinedRoute />
        </Switch>

    )
}