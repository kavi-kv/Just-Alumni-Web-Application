import React, { useState } from "react";
import "../../UI/Events/event.css";
import Button from "./Button";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import NavigationIcon from "@mui/icons-material/Navigation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import ConfirmModal from "./ConfirmModal";
// import { useTheme, useMediaQuery } from '@material-ui/core';
import data from "../../UI/Events/events.json";
import InfoModal from "./InfoModal";

export default function Events(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <div className="front-section">
        <div className="title">
          <h1>JUST ALUMNI EVENTS AND CONFERENCES</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. In publishing
            .
          </p>
          <Button
            icon={<ExploreIcon sx={{ mr: 1 }} />}
            text="Explore"
            classes={"explore"}
          />
        </div>
      </div>

          <Container sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ color: "gray", fontSize: 28 }}>
              Upcoming Events
            </Typography>
            {props.data.events.map((value) => {
              return (
                <>
                  <Grid container>
                    <Grid item lg={12} sm={12}>
                      <Paper elevation={3} sx={{ width: '100%', p: 3, my: 3 }}>
                        <div className="event_title">
                          <Typography variant="h6">{value.title}</Typography>
                          <div className="flex_ style">
                            <span className="flex_row">
                              <CalendarMonthIcon
                                fontSize="small"
                                sx={{ mr: 1 }}
                              />{" "}
                              {value.started}
                            </span>
                            <span className="flex_row">
                              <NavigationIcon fontSize="small" sx={{ mr: 1 }} />
                              {value.Location}
                            </span>
                            <span className="flex_row">
                              <GroupIcon sx={{ mr: 1 }} /> {value.Participate}
                            </span>
                          </div>
                          <Divider />
                          <div className="description">
                            <p>{value.description}.</p>
                          </div>
                          <Box>
                            <Button
                              onClick={() => setIsOpen(true)}
                              text="Participate"
                              icon={<CheckCircleOutlineIcon sx={{ mr: 1 }} />}
                              classes="explore flex_row"
                            />
                          </Box>
                        </div>
                      </Paper>
                    </Grid>
                  </Grid>
                </>
              );
            })}
            <ConfirmModal open={isOpen} setOpen={setIsOpen} />
          </Container>
    </>
  );
}
