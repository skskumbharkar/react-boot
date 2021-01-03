import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        control: {
            padding: theme.spacing(2),
        },
    }),
);

export type TimeTravelComponentProps = unknown;

export const TimeTravelComponent: React.FC<TimeTravelComponentProps> = () => {
    const classes = useStyles();

    return (
        <Grid item xs={4}>
            <Paper className={classes.control}>
                <Grid container>
                    <Grid item>
                        <FormLabel>Time Travel</FormLabel>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};
