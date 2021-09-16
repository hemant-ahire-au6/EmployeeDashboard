import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { InputLabel} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


function TaskDetailsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{margin:"10px"}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Task
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <h1> Add Employee To Project</h1>
          </DialogTitle>
        <DialogContent>

        <InputLabel id="demo-simple-select-label">Estimated Duration</InputLabel>
        <TextField id="standard-basic"  fullWidth className="text-field-class"/>

        <InputLabel id="demo-simple-select-label">Final Time</InputLabel>
        <TextField id="standard-basic"  fullWidth />

        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <TextField id="standard-basic" fullWidth />

        <InputLabel id="demo-simple-select-label">Comment</InputLabel>
        <TextField id="standard-basic"  fullWidth />

        <InputLabel id="demo-simple-select-label">Reply</InputLabel>
        <TextField id="standard-basic"  fullWidth />

        <InputLabel id="demo-simple-select-label">QA</InputLabel>
        <TextField id="standard-basic"  fullWidth />

        <InputLabel id="demo-simple-select-label">Code Quality</InputLabel>
        <TextField id="standard-basic"  fullWidth />

        <InputLabel id="demo-simple-select-label">Approved by client</InputLabel>
        <TextField id="standard-basic" fullWidth/>

        <InputLabel id="demo-simple-select-label">Developer Name</InputLabel>
        <TextField id="standard-basic"  fullWidth/>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         
          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
           
           </MuiPickersUtilsProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default TaskDetailsDialog;
