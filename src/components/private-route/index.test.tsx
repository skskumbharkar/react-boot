import { render } from '@testing-library/react';
import React from 'react';
import { ProtectedRoute } from './index';

test('Render test for private route component', async () => {
    // Arrange

    // Action
    const component = render(<ProtectedRoute key="test" />);

    // Assert
    expect(component).toBeDefined();
});
