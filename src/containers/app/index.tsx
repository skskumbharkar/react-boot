import React from 'react';
import { GameComponent } from 'components/game';
import Grid from '@material-ui/core/Grid';
import './index.scss';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                TIC TAC TOE
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item xs={12} className={classes.contents}>
                        <GameComponent />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
