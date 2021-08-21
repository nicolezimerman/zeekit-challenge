import { FunctionComponent } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

interface StatisticsInfo {
  open: boolean;
  onClose: Function;
  correctAnswers: number;
  wrongAnswers: number;
  hintsUsed: number;
}

const StatisticsDialog: FunctionComponent<StatisticsInfo> = ({
  open,
  onClose,
  hintsUsed,
  wrongAnswers,
  correctAnswers,
}: StatisticsInfo) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="simple-dialog-title">Statistics</DialogTitle>
      <DialogContent dividers>
        <Typography>Correct guesses: {correctAnswers}</Typography>
        <Typography>Wrong guesses: {wrongAnswers}</Typography>
        <Typography>Hints used: {hintsUsed}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StatisticsDialog;
