import React from 'react';
import { GameComponent } from 'components/game';

export type AppProps = unknown;

export const AppComponent: React.FC<AppProps> = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>TIC TAC TOE</h1>
            </header>
            <GameComponent />
        </div>
    );
};
