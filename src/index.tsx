import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, AppComponent } from './components/app';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';

const onLoad = () => {
    const rootElement = document.getElementById('root');
    if (rootElement && rootElement.hasChildNodes()) {
        hydrate(
            <React.StrictMode>
                <Provider store={store}>
                    <AppComponent />
                </Provider>
            </React.StrictMode>,
            rootElement,
        );
    } else {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <AppComponent />
                </Provider>
            </React.StrictMode>,
            rootElement,
        );
    }
};

onLoad();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
