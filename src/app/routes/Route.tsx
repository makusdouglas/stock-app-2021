import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthLeyout from '../Layout/auth';
import DefaultLayout from '../Layout/default';
import { useAppSelector } from '../store/hooks';

// import { store } from '../store';
interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isPrivate?: boolean;
    undefinedRoute?: boolean;
}
const RouteWrapper = (props: PrivateRouteProps) => {
    const {
        component: Component,
        isPrivate,
        undefinedRoute,
        ...rest
    } = props;
    const { isAuthenticated } = useAppSelector(state => state.auth);
    //   const { signed } = store.getState().auth;

    if (!isAuthenticated && isPrivate) {
        return <Redirect to="/" />;
    }
    if (isAuthenticated && !isPrivate) {
        return <Redirect to="/app/dashboard" />;
    }
    if (undefinedRoute && !isAuthenticated) {
        return <Redirect to="/" />;
    }
    if (undefinedRoute && isAuthenticated) {
        return <Redirect to="/app/404" />;
    }
    const Layout = isAuthenticated ? DefaultLayout : AuthLeyout;

    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}
export default RouteWrapper