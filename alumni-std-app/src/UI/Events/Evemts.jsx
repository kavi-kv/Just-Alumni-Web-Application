import React, { useContext, useEffect, useState } from "react";
import "../../UI/Events/event.css";
// import Button from './Button';
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import NavigationIcon from "@mui/icons-material/Navigation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import ConfirmModal from "./ConfirmModal";
import data from "../../UI/Events/events.json";
import InfoModal from "./InfoModal";
import { EventContext } from "../../BackEnd/context/EventContext";

export default function Events(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenMode] = useState(false);
  const [eventID, setEventID] = useState();
  const { readAllEvents, upcomingEvents } = useContext(EventContext);

  const handleClose=()=>setOpenMode(false);
  useEffect(() => {
    readAllEvents();
  }, []);
  return (
    <>
      <div className="front-section">
        <div className="title">
          <h1>JUST ALUMNI EVENTS AND CONFERENCES</h1>
          <p>
            Here You Can Up-to-date Our Upcoming Events Stay Turned And Stay
            Connected To The Community.{" "}
          </p>
          {/* <Button icon={<ExploreIcon sx={{mr: 1}}/>} text="Explore" classes={"explore"}/> */}
        </div>
      </div>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ color: "gray", fontSize: 20 }}>
          Upcoming Events
        </Typography>
        <p style={{ fontSize: 15, fontWeight: "bold", opacity: 0.4 }}>
          Alumni Events That You Can Participate{" "}
        </p>
        {upcomingEvents ? (
          upcomingEvents.length > 0 ? (
            upcomingEvents.map((value) => {
              return (
                <>
                  <Paper elevation={3} sx={{ width: 1200, p: 3, my: 3 }}>
                    <div className="event_title">
                      <Typography
                        variant="h6"
                        sx={{ mb: 1, color: "#2A2F4F", opacity: 0.9 }}
                      >
                        {value.response.Title}
                      </Typography>
                      <div className="flex_ style">
                        <span className="flex_row" style={{ marginTop: 7 }}>
                          <CalendarMonthIcon
                            fontSize="small"
                            sx={{ mr: 1, opacity: 0.6, color: "#DB005B" }}
                          />{" "}
                          {value.response.StartDate}
                        </span>
                        <span className="flex_row" style={{ marginTop: 7 }}>
                          <NavigationIcon
                            fontSize="small"
                            sx={{ mr: 1, opacity: 0.6, color: "#DB005B" }}
                          />
                          {value.response.Location}
                        </span>
                        <span className="flex_row" style={{ marginTop: 7 }}>
                          <GroupIcon
                            sx={{ mr: 1, opacity: 0.6, color: "#DB005B" }}
                          />{" "}
                          {value.response.Participate}
                        </span>
                      </div>
                      <Divider />
                      <div className="description">
                        <p>{value.response.description}.</p>
                      </div>
                      <Box>
                        <Button
                          onClick={() => {
                            setEventID(value.response.EventCode);
                            setIsOpen(true);
                          }}
                          startIcon={<CheckCircleOutlineIcon />}
                          variant="contained"
                          color="success"
                        >
                          Participate
                        </Button>
                        {/* <Button onClick={()=>setIsOpen(true)} text="Participate" icon={<CheckCircleOutlineIcon sx={{mr: 1}}/>} classes="explore flex_row"/> */}
                      </Box>
                    </div>
                  </Paper>
                </>
              );
            })
          ) : (
            <>
              <Alert
                severity="info"
                sx={{ mb: 5, mt: 3, p: 3, borderRadius: 3 }}
              >
                <strong>No Events</strong>
                <p>
                  No UpcomingEvents Are Not Available, Events Will Appear Here
                  When the admin approves or published
                </p>
              </Alert>
            </>
          )
        ) : (
          <>
            <Alert severity="info" sx={{ mb: 5, mt: 3, p: 3, borderRadius: 3 }}>
              <strong>No Events</strong>
              <p>
                No UpcomingEvents Are Not Available, Events Will Appear Here
                When the admin approves or published
              </p>
            </Alert>
          </>
        )}
        <ConfirmModal open={isOpen} setOpen={setIsOpen} eventID={eventID} />
      </Container>
    </>
  );
}
