import { RootState } from '../../index';

export const selectCurrentBoard = (state: RootState) => state.game.currentBoard;
export const selectHistoryBoards = (state: RootState) => state.game.historyBoards;
