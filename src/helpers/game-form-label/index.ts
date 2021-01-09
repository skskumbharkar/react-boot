import { GameStatus } from 'static/game-status';
import { BoardState } from 'models/board-state';

// eslint-disable-next-line import/prefer-default-export
export const getFormLabel = (currentBoard: BoardState): string => {
    switch (currentBoard?.closeGame?.gameStatus) {
        case GameStatus.IN_PROGRESS:
            return `Next Player: ${currentBoard?.nextMovePlayer}, Next move: ${currentBoard?.nextMove}`;
        case GameStatus.WIN:
            return `Winner Player: ${currentBoard?.nextMovePlayer}`;
        case GameStatus.DRAW:
            return 'Match Draw';
        default:
            return `Next Player: ${currentBoard?.nextMovePlayer}, Next move: ${currentBoard?.nextMove}`;
    }
};
