import React from 'react';
import Grid from '@material-ui/core/Grid';
import cloneDeep from 'lodash.clonedeep';
import { CellComponent } from 'components/game/cell';
import FormLabel from '@material-ui/core/FormLabel';
import { identifyWinner } from 'utils/winner';
import { AlertDialogComponent } from './alert';

export type BoardComponentProps = unknown;

export type Cell = {
    key: number;
    value: string;
};

type BoardState = {
    cells: Cell[];
    nextMove: string;
    nextMovePlayer: string;
    closeGame: {
        gameOver: boolean;
        gameOverMessage: string;
    };
};

const defaultCells: Cell[] = [
    {
        key: 1,
        value: '',
    },
    {
        key: 2,
        value: '',
    },
    {
        key: 3,
        value: '',
    },
    {
        key: 4,
        value: '',
    },
    {
        key: 5,
        value: '',
    },
    {
        key: 6,
        value: '',
    },
    {
        key: 7,
        value: '',
    },
    {
        key: 8,
        value: '',
    },
    {
        key: 9,
        value: '',
    },
];

export const BoardComponent: React.FC<BoardComponentProps> = () => {
    const [boardState, setBoardState] = React.useState<Partial<BoardState>>({
        cells: defaultCells,
        nextMove: 'X',
        nextMovePlayer: 'A',
        closeGame: {
            gameOver: false,
            gameOverMessage: '',
        },
    });

    const handleCellClick = (value: string, index: number) => {
        if (value === '') {
            const cells = cloneDeep(boardState.cells) || defaultCells;
            cells[index].value = boardState.nextMove as string;
            if (identifyWinner(cells)) {
                setBoardState({
                    closeGame: {
                        gameOver: true,
                        gameOverMessage: `Winner: ${boardState.nextMovePlayer}`,
                    },
                });
            } else {
                setBoardState({
                    cells,
                    nextMove: boardState.nextMove === 'X' ? 'O' : 'X',
                    nextMovePlayer: boardState.nextMovePlayer === 'A' ? 'B' : 'A',
                });
            }
        }
    };

    return (
        <Grid item xs={4}>
            <Grid container>
                <Grid item>
                    <FormLabel>
                        {boardState?.closeGame?.gameOver
                            ? `Next move: ${boardState?.nextMove}`
                            : `Winner: ${boardState?.nextMovePlayer}`}
                    </FormLabel>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={0}>
                {(boardState?.cells as Cell[]).map((item: Cell, index: number) => (
                    <Grid item xs={4} key={`container_${item.key}`}>
                        <CellComponent
                            key={`cell_${item.key}`}
                            value={item.value}
                            handleClick={() => handleCellClick(item.value, index)}
                        />
                    </Grid>
                ))}
            </Grid>
            <AlertDialogComponent
                openDialog={boardState?.closeGame?.gameOver as boolean}
                message={boardState?.closeGame?.gameOverMessage as string}
            />
        </Grid>
    );
};
