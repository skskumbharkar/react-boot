import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, InitialGameState } from 'static/game-state';
import {
    setupGameStatusWinReducer,
    setupGameStatusDrawReducer,
    setupGameStatusInProgressReducer,
    updateSelectedMoveReducer,
    closeAlertReducer,
} from './game-reducers';

export const gameSlice = createSlice({
    name: 'game',
    initialState: InitialGameState,
    reducers: {
        setupGameStatusWin: setupGameStatusWinReducer,
        setupGameStatusDraw: setupGameStatusDrawReducer,
        setupGameStatusInProgress: setupGameStatusInProgressReducer,
        updateSelectedMove: updateSelectedMoveReducer,
        closeAlert: closeAlertReducer,
    },
});

export const {
    setupGameStatusWin,
    setupGameStatusDraw,
    setupGameStatusInProgress,
    updateSelectedMove,
    closeAlert,
} = gameSlice.actions;

export const selectCurrentBoard = (state: GameState) => state.currentBoard;

export const selectHistoryBoards = (state: GameState) => state.historyBoards;

export default gameSlice.reducer;
