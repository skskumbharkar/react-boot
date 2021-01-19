import { MOCK_BOARD } from 'static/mock/board';
import { GameStatus } from 'static/game-status';
import { getFormLabel } from './index';

test.each([
    [GameStatus.IN_PROGRESS, 'Next Player: B, Next move: X'],
    [GameStatus.DRAW, 'Match Draw'],
    [GameStatus.WIN, 'Winner Player: B'],
])('Render test for getFormLabel with status %s', (input, expected) => {
    // Arrange
    MOCK_BOARD.closeGame.gameStatus = input;

    // Action
    const label = getFormLabel(MOCK_BOARD);

    // Assert
    expect(label).toBe(expected);
});
