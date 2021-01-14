import { render } from '@testing-library/react';
import React from 'react';
import { HeaderComponent } from './index';

test('Render test for header component', async () => {
    // Arrange

    // Action
    const component = render(<HeaderComponent />);

    // Assert
    expect(component).toBeDefined();
});
