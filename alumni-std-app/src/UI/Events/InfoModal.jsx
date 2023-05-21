import { Button, Dialog, DialogActions, DialogTitle, Typography,DialogContent, Divider, Alert } from '@mui/material'
import React from 'react'

export default function InfoModal(props) {

  return (
    <div>
        <Dialog open={props.open}>
            <DialogTitle>
                <Typography variant='h6'>Event Participation</Typography>
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Typography variant='p'></Typography>
                <Alert variant='standard' severity='info'>
                The forEach() method can be used to iterate over an array outside of your JSX code in React.

If you need to iterate over an array and render its elements directly in your JSX code, use the map() method instead.
                </Alert>
            </DialogContent>
            <DialogActions>
              
                <Button variant='outlined' color="error" onClick={()=>props.setOpen(false)}>Close</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
