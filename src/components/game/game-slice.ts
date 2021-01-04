import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, InitialGameState } from 'static/game-state';
import { GameStatus } from '../../static/game-status';
import { BoardState } from '../../static/board-state';

export const gameSlice = createSlice({
    name: 'game',
    initialState: InitialGameState,
    reducers: {
        // setupGameStatusWin: (state: GameState, action: PayloadAction<number[]>) => {
        //     return {
        //         ...state,
        //         currentBoard: {
        //             ...(state.currentBoard as BoardState),
        //             closeGame: {
        //                 gameStatus: GameStatus.WIN,
        //                 alertState: {
        //                     open: true,
        //                     title: 'Game Over',
        //                     message: `Winner Player: ${state.currentBoard?.nextMovePlayer as string}`,
        //                 },
        //                 action.payload,
        //             },
        //         },
        //     };
        // },
        // updateSelectedMove: (state) => {
        //     state.value -= 1;
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // closeAlert: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

// export const { updateGameHistory, updateSelectedMove, closeAlert } = gameSlice.actions;

export default gameSlice.reducer;
