import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthLeyout from '../Layout/auth';
import DefaultLayout from '../Layout/default';

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
    const signed = true;
    //   const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }
    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }
    if (undefinedRoute && !signed) {
        return <Redirect to="/" />;
    }
    if (undefinedRoute && signed) {
        return <Redirect to="/dashboard" />;
    }
    const Layout = signed ? DefaultLayout : AuthLeyout;

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