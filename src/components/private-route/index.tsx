import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { RouteProp } from 'models/route-prop';
import { Auth } from 'models/auth';
import { AuthContext } from 'static/auth-context';

export const ProtectedRoute: React.FC<RouteProp> = (route: RouteProp) => {
    const auth: Auth = useContext(AuthContext);

    return (
        <Route
            /* eslint-disable react/jsx-props-no-spreading */
            {...route}
            render={({ location }) =>
                // TODO Check user is authenticated and current route is protected
                auth?.user ? (
                    route.children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
