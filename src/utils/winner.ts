import { Cell } from 'components/game';

export const identifyWinner = (cells: Cell[]): boolean => {
    const possibleMatchWinner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];
    let isMatchFound = false;
    // eslint-disable-next-line consistent-return
    possibleMatchWinner.forEach((row: number[]) => {
        if (isMatchFound) {
            return true;
        }
        isMatchFound =
            cells[row[0]].value !== '' &&
            cells[row[0]].value === cells[row[1]].value &&
            cells[row[1]].value === cells[row[2]].value &&
            cells[row[0]].value === cells[row[2]].value;
    });
    return isMatchFound;
};

export const isMatchDraw = (cells: Cell[]): boolean => {
    let drawMatch = true;
    cells.forEach((item: Cell) => {
        if (item.value === '') {
            drawMatch = false;
        }
    });
    return drawMatch;
};
