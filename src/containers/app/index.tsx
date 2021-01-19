import React from 'react';
import Grid from '@material-ui/core/Grid';
import './index.scss';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { HeaderComponent } from 'components/header';
import { Routes } from 'routes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        contents: {
            padding: 24,
        },
    }),
);

export type AppProps = unknown;

export const AppComponent: React.FC<AppProps> = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <div className={classes.root}>
                    <HeaderComponent />
                </div>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item xs={12} className={classes.contents}>
                        <Routes />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
