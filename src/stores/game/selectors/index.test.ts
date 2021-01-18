import { MOCK_BOARD } from 'static/mock/board';
import cloneDeep from 'lodash.clonedeep';
import { RootState } from 'stores';
import { BoardState } from 'models/board-state';
import { selectCurrentBoard, selectHistoryBoards } from './index';

let expectedState: RootState;
beforeEach(() => {
    expectedState = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        router: {},
        game: {
            historyBoards: [cloneDeep(MOCK_BOARD)],
            currentBoard: cloneDeep(MOCK_BOARD),
        },
    };
});

test('should return current board', () => {
    // Arrange

    // Act
    const updatedState: BoardState = selectCurrentBoard(expectedState);

    // Assert
    expect(updatedState).toMatchObject(expectedState.game.currentBoard);
});

test('should return history boards', () => {
    // Arrange

    // Act
    const updatedState: BoardState[] = selectHistoryBoards(expectedState);

    // Assert
    expect(updatedState).toMatchObject(expectedState.game.historyBoards);
});
