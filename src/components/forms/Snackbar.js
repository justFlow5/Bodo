import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const SnackBar = ({ open, setOpen }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      onClose={() => setOpen(!open)}
      autoHideDuration={2000}
    >
      <Alert color="success" variant="filled">
        Question added successfully!
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
