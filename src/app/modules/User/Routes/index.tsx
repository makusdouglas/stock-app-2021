import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Profile from '../Pages/Profile';
const Routes: React.FC = () => {
    const { path, url } = useRouteMatch();
    console.log({ path, url });
    return (
        <Switch>
            <Route path={path + '/profile/:tab'} component={Profile}></Route>
            <Route path={path + '/profile'} component={Profile}></Route>
        </Switch>
    )
}

export default Routes;