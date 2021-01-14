import { render } from '@testing-library/react';
import React from 'react';
import { CellComponent } from './index';

test('Render test for cell component', async () => {
    // Arrange

    // Action
    const component = render(<CellComponent value="X" handleClick={jest.fn} winingCell />);

    // Assert
    expect(component).toBeDefined();
});
