import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export type CellComponentProps = {
    value: string | null;
    handleClick: () => void;
    winingCell: boolean;
};

const useStyles = makeStyles({
    root: {
        borderRadius: 0,
        height: 40,
    },
    noPadding: {
        padding: 0,
        paddingBottom: '0px !important',
        height: '100%',
        width: '100%',
    },
    buttonArea: {
        height: '100%',
        width: '100%',
    },
});

export const CellComponent: React.FC<CellComponentProps> = ({ value, handleClick, winingCell }: CellComponentProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.noPadding}>
                <Button
                    className={classes.buttonArea}
                    onClick={handleClick}
                    variant={winingCell ? 'contained' : undefined}
                    color={winingCell ? 'primary' : undefined}
                >
                    {value}
                </Button>
            </CardContent>
        </Card>
    );
};
