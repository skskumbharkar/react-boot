import React from 'react';
import Grid from '@material-ui/core/Grid';
import cloneDeep from 'lodash.clonedeep';
import { CellComponent } from 'components/cell';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { GameStatus } from 'static/game-status';
import { BoardState, Cell } from 'models/board-state';
import { defaultCells } from 'static/initial-state';
import { getFormLabel } from 'helpers/game-form-label';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        control: {
            padding: theme.spacing(2),
        },
    }),
);

export type BoardComponentProps = {
    currentBoard: BoardState;
    updateHistory: (cells: Cell[], index: number) => void;
};

export const BoardComponent: React.FC<BoardComponentProps> = ({ currentBoard, updateHistory }: BoardComponentProps) => {
    const classes = useStyles();

    const handleCellClick = (value: string, index: number) => {
        if (value === '' && currentBoard?.closeGame?.gameStatus === GameStatus.IN_PROGRESS) {
            const cells = cloneDeep(currentBoard.cells) || defaultCells;
            cells[index].value = currentBoard.nextMove as string;
            updateHistory(cells, index);
        }
    };

    return (
        <Grid item xs={4}>
            <Paper className={classes.control} elevation={3}>
                <Grid container>
                    <Grid item>
                        <FormLabel>{getFormLabel(currentBoard)}</FormLabel>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={0}>
                    {(currentBoard?.cells as Cell[]).map((item: Cell, index: number) => (
                        <Grid item xs={4} key={`container_${item.key}`}>
                            <CellComponent
                                key={`cell_${item.key}`}
                                value={item.value}
                                handleClick={() => handleCellClick(item.value, index)}
                                winingCell={
                                    (currentBoard?.closeGame?.winnerCellLocation as number[]).indexOf(index) > -1
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Grid>
    );
};
