import { BoardState, InitialBoardState } from './board-state';

export type GameState = {
    historyBoards: BoardState[];
    currentBoard: BoardState;
};

export const InitialGameState: GameState = {
    historyBoards: [],
    currentBoard: InitialBoardState,
};
