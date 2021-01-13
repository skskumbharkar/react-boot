import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { AppComponent } from './containers/app';
import { history, store } from './stores';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import { Routes } from './routes';
import { AuthContext } from './static/auth-context';
import { useAuth } from './hooks/auth';

const onLoad = (routeHistory: History) => {
    const rootElement = document.getElementById('root');
    // TODO remove suppress error
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useAuth();

    if (rootElement && rootElement.hasChildNodes()) {
        hydrate(
            <React.StrictMode>
                <Provider store={store}>
                    <ConnectedRouter history={routeHistory}>
                        <AuthContext.Provider value={auth}>
                            <Routes />
                            <AppComponent />
                        </AuthContext.Provider>
                    </ConnectedRouter>
                </Provider>
            </React.StrictMode>,
            rootElement,
        );
    } else {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <AppComponent />
                    </ConnectedRouter>
                </Provider>
            </React.StrictMode>,
            rootElement,
        );
    }
};

onLoad(history);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
