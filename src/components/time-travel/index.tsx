import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import { BoardState } from '../game';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

export type TimeTravelComponentProps = {
    boards: BoardState[];
    updateSelectedMove: (board: BoardState) => void;
};

export const TimeTravelComponent: React.FC<TimeTravelComponentProps> = ({
    boards,
    updateSelectedMove,
}: TimeTravelComponentProps) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(boards.length > 0 ? boards.length - 1 : 0);

    const selectMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
        updateSelectedMove(boards[index]);
    };

    return (
        <Grid item xs={4}>
            <Paper className={classes.control}>
                <Grid container>
                    <Grid item>
                        <FormLabel>Time Travel</FormLabel>
                        <div className={classes.root}>
                            <List component="nav" aria-label="list of moves">
                                {boards.map((item: BoardState, index: number) => {
                                    return (
                                        <ListItem
                                            key={item.key}
                                            button
                                            selected={selectedIndex === index}
                                            onClick={(event) => selectMove(event, index)}
                                        >
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={`Move : ${index + 1} ${item.currentMove}`} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};
