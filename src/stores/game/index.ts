import { createSlice } from '@reduxjs/toolkit';
import { InitialGameState } from 'static/initial-state';
import {
    setupGameStatusWinReducer,
    setupGameStatusDrawReducer,
    setupGameStatusInProgressReducer,
    updateSelectedMoveReducer,
    closeAlertReducer,
} from './reducers';

export { selectHistoryBoards } from './selectors';
export { selectCurrentBoard } from './selectors';

export const GameSlice = createSlice({
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

export const gameReducer = GameSlice.reducer;
