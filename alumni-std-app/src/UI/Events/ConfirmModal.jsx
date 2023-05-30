import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
  DialogContent,
  Divider,
} from "@mui/material";
import React, { useContext, useState } from "react";
import InfoModal from "./InfoModal";
import axios from "axios";
import { EventContext } from "../../BackEnd/context/EventContext";

export default function ConfirmModal(props) {
  const [openState, setOpenState] = useState(false);
const { loadEvents, Participate, responseEvent } = useContext(EventContext);
  const HandleYes = () => {
    var data = {
      action: "participate",
      data: {
        member: sessionStorage.getItem("alumni_id"),
        event: props.eventID,
      },
    };
   Participate(data);
    props.setOpen(false);
    setOpenState(true);
  };
  return (
    <div>
      <Dialog open={props.open}>
        <DialogTitle>
          <Typography variant="h6">Event Participation</Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="p">
            Are You Sure To participate This Event?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={HandleYes}>
            Yes
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => props.setOpen(false)}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>

      <InfoModal
        open={openState}
        setOpen={setOpenState}
        response={responseEvent}
        eventID={props.eventID}
      />
    </div>
  );
}
