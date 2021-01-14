import { render } from '@testing-library/react';
import React from 'react';
import { BoardComponent } from './index';
import { GameStatus } from '../../static/game-status';

test('Render test for board component', async () => {
    // Arrange
    const MOCK_BOARD = {
        key: 1,
        cells: [
            {
                key: 1,
                value: 'O',
                location: '1,1',
            },
        ],
        currentMove: '1,1',
        nextMove: '1,2',
        nextMovePlayer: 'B',
        closeGame: {
            gameStatus: GameStatus.IN_PROGRESS,
            alertState: {
                open: false,
                title: 'test title',
                message: 'test msg',
            },
            winnerCellLocation: [1, 2, 3],
        },
    };

    // Action
    const component = render(<BoardComponent currentBoard={MOCK_BOARD} updateHistory={jest.fn} />);

    // Assert
    expect(component).toBeDefined();
});
