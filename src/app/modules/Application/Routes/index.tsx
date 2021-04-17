import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard';
import NoPermission from '../Pages/NoPermission';
import NotFoud from '../Pages/NotFoud';

const Routes: React.FC = () => {
    const { path, url } = useRouteMatch();
    return (
        <Switch>
            <Route path={path + '/dashboard'} component={Dashboard} />
            <Route path={path + '/404'} exact component={NotFoud} />
            <Route path={path + '/403'} exact component={NoPermission} />
        </Switch>
    );
}

export default Routes;