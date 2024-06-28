import { Snackbar } from '@mui/material';
import React from 'react';
import AlertMUI from '@mui/material/Alert';

const Alert = () => {
    return (
        <Snackbar open={true} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <AlertMUI severity="success" variant="filled">
                This is a success Alert inside a Snackbar!
            </AlertMUI>
        </Snackbar>
    );
};

export default Alert;
