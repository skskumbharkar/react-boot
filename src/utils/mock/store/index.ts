import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { gameReducer } from 'stores/game';
import { history } from 'stores';

export const createTestStore = () => {
    return configureStore({
        reducer: combineReducers({
            router: connectRouter(history),
            game: gameReducer,
        }),
    });
};
