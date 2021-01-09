import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory, History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { AppComponent } from './containers/app';
import { store } from './stores';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';

const onLoad = (history: History) => {
    const rootElement = document.getElementById('root');
    if (rootElement && rootElement.hasChildNodes()) {
        hydrate(
            <React.StrictMode>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <AppComponent />
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

export const history: History = createBrowserHistory();
onLoad(history);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
