import React from 'react';
import { BoardComponent } from 'components/game/board';
import Grid from '@material-ui/core/Grid';
import { TimeTravelComponent } from 'components/time-travel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { identifyWinner, isMatchDraw } from 'utils/winner';
import { GameStatus } from 'static/game-status';
import { GameState } from 'static/game-state';
import { BoardState, Cell, InitialBoardState } from 'static/board-state';
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

export const GameComponent: React.FC<GameComponentProps> = () => {
    const classes = useStyles();
    const [gameState, setGameState] = React.useState<Partial<GameState>>({
        historyBoards: [],
        currentBoard: InitialBoardState,
    });

    const updateGameHistory = (cells: Cell[], cellIndex: number, board: BoardState) => {
        let currentBoard;
        const winnerCellLocation = identifyWinner(cells);
        if (winnerCellLocation) {
            currentBoard = {
                closeGame: {
                    gameStatus: GameStatus.WIN,
                    alertState: {
                        open: true,
                        title: 'Game Over',
                        message: `Winner Player: ${board?.nextMovePlayer as string}`,
                    },
                    winnerCellLocation,
                },
            };
        } else if (isMatchDraw(cells)) {
            currentBoard = {
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
                nextMove: (board?.nextMove as string) === 'X' ? 'O' : 'X',
                nextMovePlayer: (board?.nextMovePlayer as string) === 'A' ? 'B' : 'A',
            };
        }
        currentBoard = {
            ...board,
            key: (gameState.historyBoards?.length as number) + 1,
            cells,
            currentMove: cells[cellIndex].location,
            ...currentBoard,
        };
        setGameState({
            currentBoard: currentBoard as BoardState,
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
                        message: `Winner Player: ${gameState.currentBoard?.nextMovePlayer as string}`,
                    },
                    winnerCellLocation: gameState.currentBoard?.closeGame?.winnerCellLocation,
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
