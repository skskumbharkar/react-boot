import { render } from '@testing-library/react';
import React from 'react';
import { GameStatusAlertComponent } from './index';

test('Render test for game alert component', async () => {
    // Arrange

    // Action
    const component = render(
        <GameStatusAlertComponent openDialog closeAlert={jest.fn} message="test alert" title="test" />,
    );

    // Assert
    expect(component).toBeDefined();
});
