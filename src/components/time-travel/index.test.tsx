import { render } from '@testing-library/react';
import React from 'react';
import { MOCK_BOARD } from 'static/mock/board';
import { TimeTravelComponent } from './index';

test('Render test for time travel component', async () => {
    // Arrange

    // Action
    const component = render(<TimeTravelComponent boards={[MOCK_BOARD]} updateSelectedMove={jest.fn} />);

    // Assert
    expect(component).toBeDefined();
});
