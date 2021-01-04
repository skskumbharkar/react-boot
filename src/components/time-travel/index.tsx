import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import HistoryIcon from '@material-ui/icons/History';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';
import { BoardState } from '../../static/board-state';

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
        timeline: {
            width: '100%',
            '& ul': {
                width: '100%',
            },
        },
        timelineItem: {
            minWidth: 100,
        },
        pointer: {
            cursor: 'pointer',
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

    useEffect(() => {
        setSelectedIndex(boards.length > 0 ? boards.length - 1 : 0);
    }, [boards]);

    const selectMove = (index: number) => {
        setSelectedIndex(index);
        updateSelectedMove(boards[index]);
    };

    return (
        <Grid item xs={4}>
            <Paper className={classes.control} elevation={3}>
                <Grid container>
                    <Grid item>
                        <FormLabel>Time Travel</FormLabel>
                        <div className={classes.root}>
                            <Timeline align="alternate" className={classes.timeline}>
                                {boards.map((item: BoardState, index: number) => {
                                    return (
                                        <TimelineItem key={item.key} className={classes.timelineItem}>
                                            <TimelineOppositeContent>
                                                <Typography>{`Move : ${index + 1}`}</Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color={selectedIndex === index ? 'primary' : undefined}>
                                                    <ButtonBase>
                                                        <HistoryIcon onClick={() => selectMove(index)} />
                                                    </ButtonBase>
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                >{`${item.currentMove}`}</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    );
                                })}
                            </Timeline>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};
