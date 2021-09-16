import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { InputLabel, Select, MenuItem, FormControl,Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FilledInput from "@material-ui/core/FilledInput";
// import InputAdornment from "@material-ui/core/InputAdornment";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function AddProject() {
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
        ADD PROJECT
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle ><h1>Enter Project Details</h1></DialogTitle>
        
        <DialogContent>

        <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Email"
              />
          </FormControl>

          <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Project Name"
              />
          </FormControl>
          <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
              elevation={2}
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Project details"
              />
          </FormControl>
          <InputLabel id="demo-simple-select-label">Select Member</InputLabel>
          <FormControl style={{ width: "100%" }} >
           
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />

            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />
          </Grid>   
        </MuiPickersUtilsProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default AddProject;
