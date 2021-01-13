import React from 'react';
import { Switch } from 'react-router';
import routes from 'static/routes';
import { RouteProp } from 'models/route-prop';
import { ProtectedRoute } from 'components/private-route';

export const Routes: React.FC<unknown> = () => {
    return (
        <Switch>
            {routes.map((route: RouteProp) => {
                // eslint-disable-next-line react/jsx-props-no-spreading,react/jsx-key
                return <ProtectedRoute {...route} />;
            })}
        </Switch>
    );
};
