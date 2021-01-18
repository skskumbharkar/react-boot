import { BoardState } from 'models/board-state';
import { RootState } from 'stores';

export const selectCurrentBoard = (state: RootState): BoardState => state.game.currentBoard;
export const selectHistoryBoards = (state: RootState): BoardState[] => state.game.historyBoards;
