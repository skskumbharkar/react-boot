import { MOCK_BOARD } from 'static/mock/board';
import { GameState } from 'models/game-state';
import { GameStatus } from 'static/game-status';
import {
    setupGameStatusWinReducer,
    setupGameStatusDrawReducer,
    setupGameStatusInProgressReducer,
    closeAlertReducer,
    updateSelectedMoveReducer,
} from './index';

test('should return updated state for game win state', () => {
    // Arrange
    const expectedState: GameState = {
        historyBoards: [MOCK_BOARD],
        currentBoard: MOCK_BOARD,
    };
    expectedState.currentBoard.key = 2;
    expectedState.currentBoard.cells = MOCK_BOARD.cells;
    expectedState.currentBoard.currentMove = MOCK_BOARD.cells[0].location;
    expectedState.currentBoard.closeGame.gameStatus = GameStatus.WIN;
    expectedState.currentBoard.closeGame.alertState.open = true;
    expectedState.currentBoard.closeGame.alertState.title = 'Game Over';
    expectedState.currentBoard.closeGame.alertState.message = 'Winner Player: B';
    expectedState.currentBoard.closeGame.winnerCellLocation = MOCK_BOARD.closeGame.winnerCellLocation;
    expectedState.historyBoards = [MOCK_BOARD, expectedState.currentBoard];

    // Act
    const updatedState: GameState = setupGameStatusWinReducer(
        {
            historyBoards: [MOCK_BOARD],
            currentBoard: MOCK_BOARD,
        },
        {
            payload: {
                winnerCellLocation: MOCK_BOARD.closeGame.winnerCellLocation,
                cells: MOCK_BOARD.cells,
                cellIndex: 0,
            },
            type: '',
        },
    );

    // Assert
    expect(updatedState).toMatchObject(expectedState);
});

test('should return updated state for game draw state', () => {
    // Arrange
    const expectedState: GameState = {
        historyBoards: [MOCK_BOARD],
        currentBoard: MOCK_BOARD,
    };
    expectedState.currentBoard.key = 2;
    expectedState.currentBoard.cells = MOCK_BOARD.cells;
    expectedState.currentBoard.currentMove = MOCK_BOARD.cells[0].location;
    expectedState.currentBoard.closeGame.gameStatus = GameStatus.DRAW;
    expectedState.currentBoard.closeGame.alertState.open = true;
    expectedState.currentBoard.closeGame.alertState.title = 'Match Draw';
    expectedState.currentBoard.closeGame.alertState.message = 'Try again';
    expectedState.currentBoard.closeGame.winnerCellLocation = MOCK_BOARD.closeGame.winnerCellLocation;
    expectedState.historyBoards = [MOCK_BOARD, expectedState.currentBoard];

    // Act
    const updatedState: GameState = setupGameStatusDrawReducer(
        {
            historyBoards: [MOCK_BOARD],
            currentBoard: MOCK_BOARD,
        },
        {
            payload: {
                winnerCellLocation: MOCK_BOARD.closeGame.winnerCellLocation,
                cells: MOCK_BOARD.cells,
                cellIndex: 0,
            },
            type: '',
        },
    );

    // Assert
    expect(updatedState).toMatchObject(expectedState);
});

// TODO Issue with test:
/*
-   "nextMove": "O",
-   "nextMovePlayer": "A",
+   "nextMove": "X",
+   "nextMovePlayer": "B",
* */
test('should return updated state for game in-progress state', () => {
    // Arrange
    const expectedState: GameState = {
        historyBoards: [MOCK_BOARD],
        currentBoard: MOCK_BOARD,
    };
    expectedState.currentBoard.key = 2;
    expectedState.currentBoard.cells = MOCK_BOARD.cells;
    expectedState.currentBoard.currentMove = MOCK_BOARD.cells[0].location;
    expectedState.currentBoard.nextMove = 'O';
    expectedState.currentBoard.nextMovePlayer = 'A';
    expectedState.historyBoards = [MOCK_BOARD, expectedState.currentBoard];

    // Act
    const updatedState: GameState = setupGameStatusInProgressReducer(
        {
            historyBoards: [MOCK_BOARD],
            currentBoard: MOCK_BOARD,
        },
        {
            payload: {
                cells: MOCK_BOARD.cells,
                cellIndex: 0,
            },
            type: '',
        },
    );

    // Assert
    expect(updatedState.currentBoard).toMatchObject(expectedState.currentBoard);
});

test('should return updated state for selected move', () => {
    // Arrange
    const expectedState: GameState = {
        historyBoards: [MOCK_BOARD],
        currentBoard: MOCK_BOARD,
    };

    // Act
    const updatedState: GameState = updateSelectedMoveReducer(
        {
            historyBoards: [MOCK_BOARD],
            currentBoard: MOCK_BOARD,
        },
        {
            payload: {
                currentBoard: MOCK_BOARD,
            },
            type: '',
        },
    );

    // Assert
    expect(updatedState).toMatchObject(expectedState);
});

test('should return updated state for close alert state', () => {
    // Arrange
    const expectedState: GameState = {
        historyBoards: [MOCK_BOARD],
        currentBoard: MOCK_BOARD,
    };
    expectedState.currentBoard.closeGame.alertState.open = true;
    expectedState.currentBoard.closeGame.alertState.title = 'Game Over';
    expectedState.currentBoard.closeGame.alertState.message = 'Winner Player: B';

    // Act
    const updatedState: GameState = closeAlertReducer(
        {
            historyBoards: [MOCK_BOARD],
            currentBoard: MOCK_BOARD,
        },
        {
            payload: {
                open: true,
            },
            type: '',
        },
    );

    // Assert
    expect(updatedState).toMatchObject(expectedState);
});
