import React from 'react';
import { Route, Switch } from 'react-router';
import routes from 'static/routes';

export const Routes: React.FC<unknown> = () => {
    return (
        <Switch>
            {routes.map((route: Routes) => {
                // eslint-disable-next-line react/jsx-props-no-spreading,react/jsx-key
                return <Route {...route} />;
            })}
        </Switch>
    );
};
