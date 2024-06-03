import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function AvailabilityValidationDialog({value , to , from , duration , course}) {
  const [open, setOpen] = React.useState(false);

    React.useEffect(()=>{
        setOpen(value)
    },[value])


  const handleClose = () => {
    setOpen(false);
  };

  console.log(`valid from date`,from);
  console.log(`valid to date`,to);

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Warning !"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
            <Typography> Selected Course - {course} </Typography>

            <Typography> Admin need availability for {duration} month </Typography>

            <Typography> Please Select date from {from} to {to} </Typography>

            {
                course === 'Behind the Wheels' ? <Typography> Please select atleast 3 days of availability </Typography> : <Typography> Please select 50% of availability </Typography>
            }
            

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}