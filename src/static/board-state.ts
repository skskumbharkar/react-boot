import { GameStatus } from './game-status';

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
export const defaultCells: Cell[] = [
    {
        key: 1,
        value: '',
        location: '(1,1)',
    },
    {
        key: 2,
        value: '',
        location: '(1,2)',
    },
    {
        key: 3,
        value: '',
        location: '(1,3)',
    },
    {
        key: 4,
        value: '',
        location: '(2,1)',
    },
    {
        key: 5,
        value: '',
        location: '(2,2)',
    },
    {
        key: 6,
        value: '',
        location: '(2,3)',
    },
    {
        key: 7,
        value: '',
        location: '(3,1)',
    },
    {
        key: 8,
        value: '',
        location: '(3,2)',
    },
    {
        key: 9,
        value: '',
        location: '(3,3)',
    },
];
export const InitialBoardState: BoardState = {
    key: 0,
    cells: defaultCells,
    currentMove: '',
    nextMove: 'X',
    nextMovePlayer: 'A',
    closeGame: {
        gameStatus: GameStatus.IN_PROGRESS,
        alertState: {
            open: false,
            title: '',
            message: '',
        },
        winnerCellLocation: [-1, -1, -1],
    },
};
