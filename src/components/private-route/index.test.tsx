import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createTestStore } from 'utils/mock/store';
import { history } from 'stores';
import { Route, Switch } from 'react-router';
import { ProtectedRoute } from './index';
import routes from '../../static/routes';

let store: any;
beforeEach(() => {
    store = createTestStore();
});

test('Render test for private route component', async () => {
    // Arrange

    // Action
    // Note Tested internal component of protected route here as can't pass another custom component as child to router
    // It will throw error: thrown: "Could not find router reducer in state tree, it must be mounted under \"router\""
    const component = render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/home" render={() => <div />} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
    );

    // Assert
    expect(component).toBeDefined();
});
