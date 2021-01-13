import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { useAuth } from 'hooks/auth';
import { history, store } from 'stores';
import { AuthContext } from 'static/auth-context';
import { AppComponent } from 'containers/app';

export const IndexComponent: React.FC<unknown> = () => {
    const auth = useAuth();

    return (
        <React.StrictMode>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <AuthContext.Provider value={auth}>
                        <AppComponent />
                    </AuthContext.Provider>
                </ConnectedRouter>
            </Provider>
        </React.StrictMode>
    );
};
