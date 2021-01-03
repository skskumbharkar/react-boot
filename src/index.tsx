import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import { AppComponent } from './components/app';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';

const onLoad = () => {
    const rootElement = document.getElementById('root');
    if (rootElement && rootElement.hasChildNodes()) {
        hydrate(
            <React.StrictMode>
                <AppComponent />
            </React.StrictMode>,
            rootElement,
        );
    } else {
        render(
            <React.StrictMode>
                <AppComponent />
            </React.StrictMode>,
            rootElement,
        );
    }
};

setTimeout(onLoad, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
