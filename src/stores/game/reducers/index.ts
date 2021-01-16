import { PayloadAction } from '@reduxjs/toolkit';
import { GameState } from 'models/game-state';
import { BoardState, Cell } from 'models/board-state';
import { GameStatus } from 'static/game-status';

export const setupGameStatusWinReducer = (
    state: GameState,
    {
        payload: { winnerCellLocation, cells, cellIndex },
    }: PayloadAction<{ winnerCellLocation: number[]; cells: Cell[]; cellIndex: number }>,
): GameState => {
    const currentBoard = {
        ...(state.currentBoard as BoardState),
        key: (state.historyBoards?.length as number) + 1,
        cells,
        currentMove: cells[cellIndex].location,
        closeGame: {
            gameStatus: GameStatus.WIN,
            alertState: {
                open: true,
                title: 'Game Over',
                message: `Winner Player: ${state.currentBoard?.nextMovePlayer as string}`,
            },
            winnerCellLocation,
        },
    };
    return {
        ...state,
        currentBoard,
        historyBoards: [...(state.historyBoards as BoardState[]), currentBoard as BoardState],
    };
};

export const setupGameStatusDrawReducer = (
    state: GameState,
    { payload: { cells, cellIndex } }: PayloadAction<{ cells: Cell[]; cellIndex: number }>,
): GameState => {
    const currentBoard = {
        ...(state.currentBoard as BoardState),
        key: (state.historyBoards?.length as number) + 1,
        cells,
        currentMove: cells[cellIndex].location,
        closeGame: {
            gameStatus: GameStatus.DRAW,
            alertState: {
                open: true,
                title: 'Match Draw',
                message: 'Try again',
            },
            winnerCellLocation: state.currentBoard.closeGame.winnerCellLocation,
        },
    };
    return {
        ...state,
        currentBoard,
        historyBoards: [...(state.historyBoards as BoardState[]), currentBoard as BoardState],
    };
};

export const setupGameStatusInProgressReducer = (
    state: GameState,
    { payload: { cells, cellIndex } }: PayloadAction<{ cells: Cell[]; cellIndex: number }>,
): GameState => {
    const currentBoard = {
        ...(state.currentBoard as BoardState),
        key: (state.historyBoards?.length as number) + 1,
        cells,
        currentMove: cells[cellIndex].location,
        nextMove: (state.currentBoard?.nextMove as string) === 'X' ? 'O' : 'X',
        nextMovePlayer: (state.currentBoard?.nextMovePlayer as string) === 'A' ? 'B' : 'A',
    };
    return {
        ...state,
        currentBoard,
        historyBoards: [...(state.historyBoards as BoardState[]), currentBoard as BoardState],
    };
};

export const updateSelectedMoveReducer = (
    state: GameState,
    { payload: { currentBoard } }: PayloadAction<{ currentBoard: BoardState }>,
): GameState => {
    return {
        ...state,
        currentBoard,
    };
};

export const closeAlertReducer = (
    state: GameState,
    { payload: { open } }: PayloadAction<{ open: boolean }>,
): GameState => {
    return {
        ...state,
        currentBoard: {
            ...(state.currentBoard as BoardState),
            closeGame: {
                ...state.currentBoard?.closeGame,
                alertState: {
                    open,
                    title: 'Game Over',
                    message: `Winner Player: ${state.currentBoard?.nextMovePlayer as string}`,
                },
            },
        },
    };
};
