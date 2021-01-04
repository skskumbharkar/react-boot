import React from 'react';
import Grid from '@material-ui/core/Grid';
import cloneDeep from 'lodash.clonedeep';
import { CellComponent } from 'components/game/cell';
import FormLabel from '@material-ui/core/FormLabel';
import { BoardState, Cell, defaultCells, GameStatus } from '../index';

export type BoardComponentProps = {
    currentBoard: BoardState;
    updateHistory: (cells: Cell[], index: number) => void;
};

export const BoardComponent: React.FC<BoardComponentProps> = ({ currentBoard, updateHistory }: BoardComponentProps) => {
    const handleCellClick = (value: string, index: number) => {
        if (value === '' && currentBoard?.closeGame?.gameStatus === GameStatus.IN_PROGRESS) {
            const cells = cloneDeep(currentBoard.cells) || defaultCells;
            cells[index].value = currentBoard.nextMove as string;
            updateHistory(cells, index);
        }
    };

    const getFormLabel = (): string => {
        switch (currentBoard?.closeGame?.gameStatus) {
            case GameStatus.IN_PROGRESS:
                return `Next move: ${currentBoard?.nextMove}`;
            case GameStatus.WIN:
                return `Winner: ${currentBoard?.nextMovePlayer}`;
            case GameStatus.DRAW:
                return 'Match Draw';
            default:
                return `Next move: ${currentBoard?.nextMove}`;
        }
    };

    return (
        <Grid item xs={4}>
            <Grid container>
                <Grid item>
                    <FormLabel>{getFormLabel()}</FormLabel>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={0}>
                {(currentBoard?.cells as Cell[]).map((item: Cell, index: number) => (
                    <Grid item xs={4} key={`container_${item.key}`}>
                        <CellComponent
                            key={`cell_${item.key}`}
                            value={item.value}
                            handleClick={() => handleCellClick(item.value, index)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};
