import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppComponent } from './index';
import { history } from '../../stores';
import { createTestStore } from '../../utils/mock/store';

let store: any;
beforeEach(() => {
    store = createTestStore();
});

test('Render test for app component', async () => {
    // Arrange

    // Action
    const component = render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppComponent />
            </ConnectedRouter>
        </Provider>,
    );

    // Assert
    expect(component).toBeDefined();
});
