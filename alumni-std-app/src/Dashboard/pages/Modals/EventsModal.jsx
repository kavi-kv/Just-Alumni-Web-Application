import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Divider,
  DialogContent,
  Grid,
  FormGroup,
  Input,
  TextField,
  Button,
  DialogActions,
} from "@mui/material";
import $ from 'jquery';
import React, { useContext, useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SchoolIcon from "@mui/icons-material/School";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import VerifiedIcon from "@mui/icons-material/Verified";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { EventContext } from "../../../BackEnd/context/EventContext";
import { isEventBlank } from "../../../Validations";
import { toast } from "react-toastify";
export default function EventsModal(props) {
  const { RegisterEvent, EditEvent, loadEvents } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState({
    event: "",
    location: "",
    startDate: "",
    description: "",
  });

  const changeEventValues = (e) => {
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value,
    });
  };

  const changeUpdateValue = (e) => {
    props.setResponseDetail({
      ...props.response,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditEvent = (e) => {
    e.preventDefault();
    console.log(props.response);
    var data = {
      action: "EditEvent",
      data: props.response,
    };
    EditEvent(data);
    setTimeout(() => {
      props.setOpen(false);
    }, 2000);
  };
  const registerEvent = (e) => {
    if(isEventBlank(eventDetails))
    {
      toast.error("All Event Information Must Provide",{
        position: "top-center",
        theme: "light",
        autoClose: 2000
      })
      return;
    }
    var data = {
      action: "RegisterEvent",
      data: eventDetails,
    };
    console.log(data);
    RegisterEvent(data);
    loadEvents();
   setTimeout(() => {
    $(props.dataTable).DataTable().ajax.reload();
   }, 30);
  };

  return (
    <>
      {props.modalType == "add" ? (
        <Dialog open={props.open} onClose={() => props.setOpen(false)}>
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Add New Event</Typography>
            <Box>
              <IconButton onClick={() => props.setOpen(false)}>
                <Close color="error" />
              </IconButton>
            </Box>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item lg={6}>
                <div className="form-group">
                  <label style={{ marginBottom: "2px" }}>Event</label>
                  <input
                    onChange={changeEventValues}
                    name="event"
                    width="100%"
                    type="text"
                    style={{ marginTop: "10px" }}
                  />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className="form-group">
                  <label style={{ marginBottom: "2px" }}>Location</label>
                  <input
                    onChange={changeEventValues}
                    name="location"
                    width="100%"
                    style={{ marginTop: "10px" }}
                    type="text"
                  />
                </div>
              </Grid>
              <Grid item lg={12}>
                <div className="form-group">
                  <label style={{ marginBottom: "2px" }}>StartDate</label>
                  <input
                    onChange={changeEventValues}
                    name="startDate"
                    width="100%"
                    style={{ marginTop: "10px" }}
                    type="date"
                  />
                </div>
              </Grid>
              <Grid item lg={12}>
                <div
                  className="form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label style={{ marginBottom: "2px" }}>Description</label>
                  <textarea
                    onChange={changeEventValues}
                    name="description"
                    rows={8}
                    cols={10}
                    width="100%"
                    style={{ marginTop: "10px", padding: 10 }}
                    placeholder="Some Description About Event, For Enhancement"
                  ></textarea>
                </div>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              onClick={registerEvent}
            >
              Save
            </Button>
          </DialogContent>
        </Dialog>
      ) : (
        props.response && (
          <Dialog open={props.open} onClose={() => props.setOpen(false)}>
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Edit Event</Typography>
              <Box>
                <IconButton onClick={() => props.setOpen(false)}>
                  <Close color="error" />
                </IconButton>
              </Box>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Grid container spacing={1}>
                <Grid item lg={6}>
                  <div className="form-group">
                    <label style={{ marginBottom: "2px" }}>Event</label>
                    <input
                      value={props.response.Title}
                      onChange={changeUpdateValue}
                      name="Title"
                      width="100%"
                      type="text"
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className="form-group">
                    <label style={{ marginBottom: "2px" }}>Location</label>
                    <input
                      onChange={changeUpdateValue}
                      name="location"
                      width="100%"
                      style={{ marginTop: "10px" }}
                      type="text"
                    />
                  </div>
                </Grid>
                <Grid item lg={12}>
                  <div className="form-group">
                    <label style={{ marginBottom: "2px" }}>StartDate</label>
                    <input
                      value={props.response.StartDate}
                      onChange={changeUpdateValue}
                      name="StartDate"
                      width="100%"
                      style={{ marginTop: "10px" }}
                      type="date"
                    />
                  </div>
                </Grid>
                <Grid item lg={12}>
                  <div
                    className="form-group"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label style={{ marginBottom: "2px" }}>Description</label>
                    <textarea
                      onChange={changeUpdateValue}
                      name="description"
                      value={props.response.description}
                      rows={8}
                      cols={10}
                      width="100%"
                      style={{ marginTop: "10px", padding: 10 }}
                      placeholder="Some Description About Event, For Enhancement"
                    ></textarea>
                  </div>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
                onClick={handleEditEvent}
              >
                Edit
              </Button>
            </DialogContent>
          </Dialog>
        )
      )}
    </>
  );
}
