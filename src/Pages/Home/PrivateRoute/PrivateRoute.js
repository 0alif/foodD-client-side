import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    // show spinner
    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;