import React from 'react';
import logo from './logo.svg';
import './App.scss';

export type AppProps = unknown;

export const App: React.FC<AppProps> = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello World</h1>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};
