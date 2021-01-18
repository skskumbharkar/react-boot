import cloneDeep from 'lodash.clonedeep';
import { GameState } from 'models/game-state';
import { InitialBoardState } from 'static/initial-state';
import { createTestStore } from './index';

let expectedState: GameState;
beforeEach(() => {
    expectedState = {
        historyBoards: [],
        currentBoard: cloneDeep(InitialBoardState),
    };
});

test('should return redux store', () => {
    // Arrange

    // Act
    const store = createTestStore();

    // Assert
    expect(store.getState().game).toMatchObject(expectedState);
});
