import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Manage from '../Pages/Manage';
const Routes: React.FC = () => {
    const { path, url } = useRouteMatch();
    console.log({ path, url });
    return (
        <Switch>
            <Route path={path + '/manage/:tab'} component={Manage}></Route>
            <Route path={path + '/manage'} component={Manage}></Route>
        </Switch>
    )
}

export default Routes;