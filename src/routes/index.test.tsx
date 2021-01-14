import { render } from '@testing-library/react';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Routes } from './index';
import { history, store } from '../stores';

test('Render test for routes component', async () => {
    // Arrange

    // Action
    // TODO Mock store and history
    const component = render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>,
    );

    // Assert
    expect(component).toBeDefined();
});
