import { GameStatus } from '../game-status';

export const MOCK_BOARD = {
    key: 1,
    cells: [
        {
            key: 1,
            value: 'O',
            location: '1,1',
        },
    ],
    currentMove: '1,1',
    nextMove: 'X',
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
