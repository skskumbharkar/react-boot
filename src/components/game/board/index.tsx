import React from 'react';
import Grid from '@material-ui/core/Grid';
import cloneDeep from 'lodash.clonedeep';
import { CellComponent } from 'components/game/cell';
import FormLabel from '@material-ui/core/FormLabel';
import { BoardState, Cell, defaultCells } from '../index';

export type BoardComponentProps = {
    currentBoard: BoardState;
    updateHistory: (cells: Cell[]) => void;
};

export const BoardComponent: React.FC<BoardComponentProps> = ({ currentBoard, updateHistory }: BoardComponentProps) => {
    const handleCellClick = (value: string, index: number) => {
        if (value === '' && currentBoard?.closeGame?.gameOver === false) {
            const cells = cloneDeep(currentBoard.cells) || defaultCells;
            cells[index].value = currentBoard.nextMove as string;
            updateHistory(cells);
        }
    };

    return (
        <Grid item xs={4}>
            <Grid container>
                <Grid item>
                    <FormLabel>
                        {currentBoard?.closeGame?.gameOver
                            ? `Winner: ${currentBoard?.nextMovePlayer}`
                            : `Next move: ${currentBoard?.nextMove}`}
                    </FormLabel>
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
