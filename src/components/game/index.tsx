import React from 'react';
import { BoardComponent } from 'components/game/board';
import Grid from '@material-ui/core/Grid';
import { TimeTravelComponent } from 'components/time-travel';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export type GameComponentProps = unknown;

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            flexGrow: 1,
            width: '100%',
        },
    }),
);

export const GameComponent: React.FC<GameComponentProps> = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center" className={classes.container} spacing={2}>
            <BoardComponent />
            <TimeTravelComponent />
        </Grid>
    );
};
