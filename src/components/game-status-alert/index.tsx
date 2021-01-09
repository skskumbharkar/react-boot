import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export type GameStatusAlertComponentProps = {
    openDialog: boolean;
    title: string;
    message: string;
    closeAlert: (open: boolean) => void;
};

export const GameStatusAlertComponent: React.FC<GameStatusAlertComponentProps> = ({
    openDialog,
    title,
    message,
    closeAlert,
}: GameStatusAlertComponentProps) => {
    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={closeAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeAlert(false)} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
