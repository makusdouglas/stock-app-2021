import React from 'react';
import {
    Switch,
    Redirect,
} from 'react-router-dom';

import AppModule from '@Module/Application/Routes';
import UserModule from '@Module/User/Routes';
import TeamModule from '@Module/Team/Routes'
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
            <Route path='/team' component={TeamModule} isPrivate />
            <Route component={() => <Redirect to='/app/404' />} isPrivate undefinedRoute />
        </Switch>

    )
}