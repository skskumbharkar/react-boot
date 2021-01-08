import { GameSlice } from '../index';

export const {
    setupGameStatusWin,
    setupGameStatusDraw,
    setupGameStatusInProgress,
    updateSelectedMove,
    closeAlert,
} = GameSlice.actions;
