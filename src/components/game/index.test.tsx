import { render } from '@testing-library/react';
import React from 'react';
import { GameComponent } from './index';

test('Render test for game component', async () => {
    // Arrange

    // Action
    const component = render(<GameComponent />);

    // Assert
    expect(component).toBeDefined();
});
