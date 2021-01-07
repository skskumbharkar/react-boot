import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from 'models/game-state';
import {
    setupGameStatusWinReducer,
    setupGameStatusDrawReducer,
    setupGameStatusInProgressReducer,
    updateSelectedMoveReducer,
    closeAlertReducer,
} from '../../stores/reducers/game';
import { RootState } from '../../stores';
import { InitialGameState } from '../../static/initial-state';

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

export const selectCurrentBoard = (state: RootState) => state.game.currentBoard;

export const selectHistoryBoards = (state: RootState) => state.game.historyBoards;

export default gameSlice.reducer;
