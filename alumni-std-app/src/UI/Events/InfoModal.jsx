import { Button, Dialog, DialogActions, DialogTitle, Typography,DialogContent, Divider, Alert } from '@mui/material'
import React, { useContext, useState } from 'react'
import { EventContext } from '../../BackEnd/context/EventContext'
import UnlinkModal from './UnLinkModal';

export default function InfoModal(props) {

    const { Unlink, unLinkResponse } = useContext(EventContext);
    const [showUnlinkModal,setShowUnlinkModal]=useState(false);
    const handleUnLink=(e)=>{
        var data = {
          action: "unLink",
          data: {
            member: sessionStorage.getItem("alumni_id"),
            event: props.eventID,
          },
        };
        Unlink(data);
        setShowUnlinkModal(true);
        props.setOpen(false);
    }
  return (
    <div>
      {props.response && (
        <Dialog open={props.open}>
          <DialogTitle>
            <Typography variant="h6">Event Participation</Typography>
          </DialogTitle>
          <Divider />
          <DialogContent>
            {props.response.validity ? (
              <>
                <Typography variant="p"></Typography>
                <Alert variant="standard" severity="info">
                  {props.response.response}
                </Alert>
              </>
            ) : (
              <>
                <Typography variant="p"></Typography>
                <Alert variant="standard" severity="error">
                  {props.response.response}
                </Alert>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="info"
              onClick={() => props.setOpen(false)}
            >
              Close
            </Button>
           {!props.response.validity ?  <Button
              variant="contained"
              color="error"
              onClick={handleUnLink}
            >
              UnParticipate
            </Button> : null }
          </DialogActions>
        </Dialog>
      )}
      <UnlinkModal response={unLinkResponse} open={showUnlinkModal} setOpen={setShowUnlinkModal}/>
    </div>
  );
}
