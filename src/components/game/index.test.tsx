import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createTestStore } from 'utils/mock/store';
import { GameComponent } from './index';

let store: any;
beforeEach(() => {
    store = createTestStore();
});
test('Render test for game component', async () => {
    // Arrange

    // Action
    const component = render(
        <Provider store={store}>
            <GameComponent />
        </Provider>,
    );

    // Assert
    expect(component).toBeDefined();
});
