import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createTestStore } from 'utils/mock/store';
import { history } from 'stores';
import { ProtectedRoute } from './index';

let store: any;
beforeEach(() => {
    store = createTestStore();
});

test('Render test for private route component', async () => {
    // Arrange

    // Action
    const component = render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ProtectedRoute key="test" />
            </ConnectedRouter>
        </Provider>,
    );

    // Assert
    expect(component).toBeDefined();
});
