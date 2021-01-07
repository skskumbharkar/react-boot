import { GameStatus } from '../static/game-status';

export type Cell = {
    key: number;
    value: string;
    location: string;
};
export type BoardState = {
    key: number;
    cells: Cell[];
    currentMove: string;
    nextMove: string;
    nextMovePlayer: string;
    closeGame: {
        gameStatus: GameStatus;
        alertState: {
            open: boolean;
            title: string;
            message: string;
        };
        winnerCellLocation: number[] | undefined;
    };
};
