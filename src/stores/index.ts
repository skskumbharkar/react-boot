import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory, History } from 'history';
import { gameReducer } from 'stores/game';
import { connectRouter } from 'connected-react-router';

export const history: History = createBrowserHistory();

export const store = configureStore({
    reducer: combineReducers({
        router: connectRouter(history),
        game: gameReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
