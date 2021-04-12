import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={Dashboard} />
        </Switch>
    );
}

export default Routes;