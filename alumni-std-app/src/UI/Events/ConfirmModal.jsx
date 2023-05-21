import { Button, Dialog, DialogActions, DialogTitle, Typography,DialogContent, Divider } from '@mui/material'
import React, { useState } from 'react'
import InfoModal from './InfoModal'

export default function ConfirmModal(props) {

    const [openState,setOpenState]=useState(false);

    const HandleYes=()=>{
        props.setOpen(false);
        setOpenState(true);
       
    }
  return (
    <div>
        <Dialog open={props.open}>
            <DialogTitle>
                <Typography variant='h6'>Event Participation</Typography>
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Typography variant='p'>Are You Sure To participate This Event?</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color="success" onClick={HandleYes}>Yes</Button>
                <Button variant='outlined' color="error" onClick={()=>props.setOpen(false)}>No</Button>
            </DialogActions>
        </Dialog>

       <InfoModal open={openState} setOpen={setOpenState}/>
    </div>
  )
}
