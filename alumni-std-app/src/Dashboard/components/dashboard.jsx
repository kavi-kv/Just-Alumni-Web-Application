import {
  Image,
  ProductionQuantityLimitsSharp,
  SignalCellularConnectedNoInternet2BarTwoTone,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import "./dashboard.css";
import { CountContext } from "../../BackEnd/context/CountContext";

import TodayIcon from "@mui/icons-material/Today";
import TocIcon from "@mui/icons-material/Toc";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import DataTables from "datatables.net-dt";
import Header from "./Header";
import Layout from "../../Layout";
import SideBar from "./sidebar";
export default function Dashboard() {
  const {
    loadCount,
    Count,
    readPublishedEvents,
    upcomingEvents,
    readTopAlumni,
    resent
  } = useContext(CountContext);

  useEffect(() => {
    
    console.log("===================");
    loadCount();
readTopAlumni();
    readPublishedEvents();

    setTimeout(() => {
      var data = new DataTables("#myTable");
    }, 100);

    // var data2 = new DataTables("#events");
  }, []);
  return (
    <>
      {/* <div className="container-fluid"> */}
      <Grid container>
        <SideBar />
        <Grid item lg={10}>
          <Header />

          <Container sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item lg={4} md={12} sx={{ mb: 3 }}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: "#2A2F4F",
                    color: "white",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="content-details">
                      <PeopleIcon fontSize="large" color="error" />
                      <span>{Count?.response.users}</span>
                    </div>
                    <span className="section">Users</span>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item lg={4} md={12} sx={{ mb: 3 }}>
                <Card sx={{ p: 4, borderRadius: 3, background: "#460C68" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="content-details" style={{ color: "white" }}>
                      <TodayIcon fontSize="large" color="error" />
                      <span>{Count?.response.events}</span>
                    </div>
                    <span className="section">Events</span>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item lg={4} md={12} sx={{ mb: 3 }}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: "#8B1874",
                    color: "white",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="content-details">
                      <SchoolIcon fontSize="large" color="error" />
                      <span>{Count?.response.alumni}</span>
                    </div>
                    <span className="section dar-color">Alumni</span>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item lg={8} md={12}>
                <Paper sx={{ p: 3 }}>
                  <Typography>Recent Alumni Graduates</Typography>
                  <Divider sx={{ my: 2 }} />
                  <table id="myTable" className="display mt-2">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Graduated Year</th>
                        <th>Graduated Batch</th>
                      </tr>
                    </thead>
                    <tbody>
                    {resent && resent.map(value=>
                    {
                      return (
                        <tr>
                          <td>{value.response.FullName}</td>
                          <td>{value.response.GraduatedYear}</td>
                          <td>{value.response.GraduatedBatch}</td>
                      </tr>
                      )

                    })}
                      
                     
                    </tbody>
                  </table>
                </Paper>
              </Grid>

              <Grid item lg={4} md={12}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6">Upcoming Events</Typography>
                  <Divider />
                  {upcomingEvents ? (
                    upcomingEvents.length > 0 ? (
                      <List>
                        {upcomingEvents.map((event) => {
                          return (
                            <ListItem>
                              <ListItemText
                                primary={
                                  <Typography variant="h6" sx={{fontSize: 16}}>
                                    {event.response.Title} -{" "}
                                    {event.response.StartDate}
                                  </Typography>
                                }
                                secondary={event.response.description.substring(0,80)+" .. (Read Event Page)"}
                              />
                            </ListItem>
                          );
                        })}
                      </List>
                    ) : (
                      <>
                        <Alert sx={{ my: 2 }} severity="info">
                          No Upcoming Events Are Available
                        </Alert>{" "}
                      </>
                    )
                  ) : (
                    "Loading... "
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
