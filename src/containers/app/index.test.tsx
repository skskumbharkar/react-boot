import React from 'react';
import { render } from '@testing-library/react';
import { AppComponent } from './index';

test('Render test for app component', async () => {
    // Arrange

    // Action
    const component = render(<AppComponent />);

    // Assert
    expect(component).toBeDefined();
});
