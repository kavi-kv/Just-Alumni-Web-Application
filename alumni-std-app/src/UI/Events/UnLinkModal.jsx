import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
  DialogContent,
  Divider,
  Alert,
} from "@mui/material";
import React, { useContext } from "react";
import { EventContext } from "../../BackEnd/context/EventContext";

export default function UnlinkModal(props) {
  const { Unlink } = useContext(EventContext);

  return (
    <div>
      {props.response && (
        <Dialog open={props.open}>
          <DialogTitle>
            <Typography variant="h6">Unlink Participation</Typography>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Typography variant="p"></Typography>
            <Alert variant="standard" severity="info">
              {props.response.response}
            </Alert>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="info"
              onClick={() => props.setOpen(false)}
            >
              Ok
            </Button>
          
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
