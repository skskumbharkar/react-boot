import { BoardState } from './board-state';

export type GameState = {
    historyBoards: BoardState[];
    currentBoard: BoardState;
};
