import {
  Button,
  Container,
  Paper,
  Typography,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import $ from "jquery";
import React, { useContext, useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import DataTables from "datatables.net-dt";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import { EventContext } from "../../BackEnd/context/EventContext";

import Header from "../components/Header";
import Layout from "../../Layout";
import SideBar from "../components/sidebar";
import EventsModal from "./Modals/EventsModal";
import { Check, Delete, Edit, Publish } from "@mui/icons-material";

export default function Participate() {
  const [tableData, setTableData] = useState("#eventList");
  const {
    RegisterEvent,
    loadEvents,
    responseData,
    publishEvents,
    deleteEvent,
    FetchEvent,
    responseDetail,
    setResponseDetail,
    loadPart
  } = useContext(EventContext);

  useEffect(() => {
   loadPart();
    setTimeout(() => {
      var data = new DataTables("#eventList");
    }, 80);
  }, []);


  return (
    <Grid container>
      <SideBar />
      <Grid item lg={10}>
        <Header />
        <Container>
          <Paper
            sx={{
              p: 2,
              my: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">View All Participations</Typography>
          
          </Paper>

          <Paper sx={{ p: 3 }}>
            <table id="eventList" className="display mt-2 table table-bordered">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Member (Participate)</th>
                  <th>From Batch</th>
                </tr>
              </thead>
              <tbody>
                {responseData
                  ? responseData.map((value) => {
                      return (
                        <tr>
                          <td>{value.response.Title}</td>
                          <td>{value.response.Participators}</td>
                          <td>{value.response.GraduatedBatch}</td>
                        </tr>
                      );
                    })
                  : "Fetching.."}
              </tbody>
            </table>
          </Paper>
        </Container>

      
      </Grid>
    </Grid>
  );
}
