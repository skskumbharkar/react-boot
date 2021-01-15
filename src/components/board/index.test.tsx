import { render } from '@testing-library/react';
import React from 'react';
import { MOCK_BOARD } from 'static/mock/board';
import { BoardComponent } from './index';

test('Render test for board component', async () => {
    // Arrange

    // Action
    const component = render(<BoardComponent currentBoard={MOCK_BOARD} updateHistory={jest.fn} />);

    // Assert
    expect(component).toBeDefined();
});
