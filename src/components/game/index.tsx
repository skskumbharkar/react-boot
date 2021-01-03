import React from 'react';
import { BoardComponent } from 'components/game/board';
import Grid from '@material-ui/core/Grid';
import { TimeTravelComponent } from 'components/time-travel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { identifyWinner } from 'utils/winner';
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
};

export type BoardState = {
    key: number;
    cells: Cell[];
    nextMove: string;
    nextMovePlayer: string;
    closeGame: {
        gameOver: boolean;
        gameOverMessage: string;
    };
};

export const defaultCells: Cell[] = [
    {
        key: 1,
        value: '',
    },
    {
        key: 2,
        value: '',
    },
    {
        key: 3,
        value: '',
    },
    {
        key: 4,
        value: '',
    },
    {
        key: 5,
        value: '',
    },
    {
        key: 6,
        value: '',
    },
    {
        key: 7,
        value: '',
    },
    {
        key: 8,
        value: '',
    },
    {
        key: 9,
        value: '',
    },
];

export const defaultBoardState = {
    key: 0,
    cells: defaultCells,
    nextMove: 'X',
    nextMovePlayer: 'A',
    closeGame: {
        gameOver: false,
        gameOverMessage: '',
    },
};

export const GameComponent: React.FC<GameComponentProps> = () => {
    const classes = useStyles();
    const [gameState, setGameState] = React.useState<Partial<GameState>>({
        historyBoards: [],
        currentBoard: defaultBoardState,
    });

    const updateGameHistory = (cells: Cell[], board: BoardState) => {
        let currentBoard: BoardState;
        if (identifyWinner(cells)) {
            currentBoard = {
                ...board,
                key: (gameState.historyBoards?.length as number) + 1,
                cells,
                closeGame: {
                    gameOver: true,
                    gameOverMessage: `Winner: ${board?.nextMovePlayer as string}`,
                },
            };
        } else {
            currentBoard = {
                ...board,
                key: (gameState.historyBoards?.length as number) + 1,
                cells,
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

    return (
        <Grid container justify="center" className={classes.container} spacing={2}>
            <BoardComponent
                updateHistory={(cells: Cell[]) => updateGameHistory(cells, gameState.currentBoard as BoardState)}
                currentBoard={gameState.currentBoard as BoardState}
            />
            <TimeTravelComponent
                boards={gameState.historyBoards as BoardState[]}
                updateSelectedMove={(board: BoardState) => updateSelectedMove(board)}
            />
            {gameState.currentBoard?.closeGame?.gameOver && (
                <AlertDialogComponent
                    openDialog={gameState.currentBoard?.closeGame?.gameOver as boolean}
                    message={gameState.currentBoard?.closeGame?.gameOverMessage as string}
                />
            )}
        </Grid>
    );
};
