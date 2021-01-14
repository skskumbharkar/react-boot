import React from 'react';
import { render, screen } from '@testing-library/react';
import { IndexComponent } from './index';

test('Render test for index component', async () => {
    // Arrange

    // Action
    const component = render(<IndexComponent />);

    // Assert
    expect(component).toBeDefined();
});
