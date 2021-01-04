import React from 'react';
import { BoardComponent } from 'components/game/board';
import Grid from '@material-ui/core/Grid';
import { TimeTravelComponent } from 'components/time-travel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { identifyWinner, isMatchDraw } from 'utils/winner';
import { AlertDialogComponent } from './board/alert';

export type GameComponentProps = unknown;

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            flexGrow: 1,
            width: '100%',
        },
    }),
);

type GameState = {
    historyBoards: BoardState[];
    currentBoard: BoardState;
};

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

export enum GameStatus {
    IN_PROGRESS = 'inprogress',
    WIN = 'win',
    DRAW = 'draw',
}

export const defaultBoardState: BoardState = {
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
    },
};

export const GameComponent: React.FC<GameComponentProps> = () => {
    const classes = useStyles();
    const [gameState, setGameState] = React.useState<Partial<GameState>>({
        historyBoards: [],
        currentBoard: defaultBoardState,
    });

    const updateGameHistory = (cells: Cell[], cellIndex: number, board: BoardState) => {
        let currentBoard: BoardState;
        if (identifyWinner(cells)) {
            currentBoard = {
                ...board,
                key: (gameState.historyBoards?.length as number) + 1,
                cells,
                currentMove: cells[cellIndex].location,
                closeGame: {
                    gameStatus: GameStatus.WIN,
                    alertState: {
                        open: true,
                        title: 'Game Over',
                        message: `Winner: ${board?.nextMovePlayer as string}`,
                    },
                },
            };
        } else if (isMatchDraw(cells)) {
            currentBoard = {
                ...board,
                key: (gameState.historyBoards?.length as number) + 1,
                cells,
                currentMove: cells[cellIndex].location,
                closeGame: {
                    gameStatus: GameStatus.DRAW,
                    alertState: {
                        open: true,
                        title: 'Match Draw',
                        message: 'Try again',
                    },
                },
            };
        } else {
            currentBoard = {
                ...board,
                key: (gameState.historyBoards?.length as number) + 1,
                cells,
                currentMove: cells[cellIndex].location,
                nextMove: (board?.nextMove as string) === 'X' ? 'O' : 'X',
                nextMovePlayer: (board?.nextMovePlayer as string) === 'A' ? 'B' : 'A',
            };
        }
        setGameState({
            currentBoard,
            historyBoards: [...(gameState.historyBoards as BoardState[]), currentBoard as BoardState],
        });
    };

    const updateSelectedMove = (currentBoard: BoardState) => {
        setGameState({
            currentBoard,
            historyBoards: gameState.historyBoards,
        });
    };

    const closeAlert = (open: boolean) => {
        setGameState({
            currentBoard: {
                ...(gameState.currentBoard as BoardState),
                closeGame: {
                    gameStatus: gameState.currentBoard?.closeGame?.gameStatus as GameStatus,
                    alertState: {
                        open,
                        title: 'Game Over',
                        message: `Winner: ${gameState.currentBoard?.nextMovePlayer as string}`,
                    },
                },
            },
            historyBoards: gameState.historyBoards,
        });
    };

    return (
        <Grid container justify="center" className={classes.container} spacing={2}>
            <BoardComponent
                updateHistory={(cells: Cell[], cellIndex: number) =>
                    updateGameHistory(cells, cellIndex, gameState.currentBoard as BoardState)
                }
                currentBoard={gameState.currentBoard as BoardState}
            />
            <TimeTravelComponent
                boards={gameState.historyBoards as BoardState[]}
                updateSelectedMove={(board: BoardState) => updateSelectedMove(board)}
            />
            {gameState.currentBoard?.closeGame?.alertState?.open && (
                <AlertDialogComponent
                    openDialog={gameState.currentBoard?.closeGame?.alertState?.open as boolean}
                    title={gameState.currentBoard?.closeGame?.alertState?.title as string}
                    message={gameState.currentBoard?.closeGame?.alertState?.message as string}
                    closeAlert={(open: boolean) => closeAlert(open)}
                />
            )}
        </Grid>
    );
};
