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

export default function Events() {
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
  } = useContext(EventContext);

  const [showEventModal, setShowEventModal] = useState(false);
  const [modalType, setModalType] = useState("");
  useEffect(() => {
    loadEvents();
    setTimeout(() => {
      var data = new DataTables("#eventList");
    }, 80);
  }, []);

  const verify = (values) => {
    var data = {
      action: "PublishUnPublish",
      data: values,
    };
    publishEvents(data);
  };

  const DeleteEvent = (values) => {
    swal(
      {
        title: "Are you sure?",
        text: "Confirm to delete this Student from the System!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false,
      },
      function () {
        var data = {
          action: "delete",
          data: values,
        };
        deleteEvent(data);
      }
    );
  };
  const fetchEventDetails = (id) => {
    var data = {
      action: "FetchEvent",
      data: {
        id: id,
      },
    };
    FetchEvent(data);
    setModalType("edit");
    setShowEventModal(true);
  };

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
            <Typography variant="p">View And Manage Event List</Typography>
            <div>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  setModalType("add");
                  setShowEventModal(true);
                }}
              >
                Add Event
              </Button>
            </div>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <table id="eventList" className="display mt-2 table table-bordered">
              <thead>
                <tr>
                  <th>EventCode</th>
                  <th>Title</th>
                  <th>Location</th>
                
                  <th>StartDate</th>
                  <th>Published</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {responseData
                  ? responseData.map((value) => {
                      return (
                        <tr key={value.response.EventCode}>
                          <td>{value.response.EventCode}</td>
                          <td
                            title={"Number Of Audiences: " + value.response.Participate}
                          >
                            {value.response.Title}
                          </td>

                          <td>{value.response.Location}</td>

                          <td>{value.response.StartDate}</td>
                          <td>
                            {value.response.published == "unpublished" ? (
                              <Button
                                onClick={() => {
                                  verify({
                                    type: value.response.published,
                                    id: value.response.EventCode,
                                    update: "one",
                                  });
                                }}
                                variant="outlined"
                                color="error"
                                startIcon={<UnpublishedIcon />}
                              ></Button>
                            ) : (
                              <Button
                                onClick={() => {
                                  verify({
                                    type: value.response.published,
                                    id: value.response.EventCode,
                                    update: "one",
                                  });
                                }}
                                variant="outlined"
                                color="success"
                                startIcon={<VerifiedIcon />}
                              ></Button>
                            )}{" "}
                          </td>
                          <td>
                            <IconButton
                              onClick={() => {
                                fetchEventDetails(value.response.EventCode);
                              }}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              onClick={() =>
                                DeleteEvent({
                                  id: "EventCode",
                                  DeleteId: value.response.EventCode,
                                  table: "events",
                                })
                              }
                            >
                              <Delete />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })
                  : "Fetching.."}
              </tbody>
            </table>
          </Paper>
        </Container>

        <EventsModal
          modalType={modalType}
          open={showEventModal}
          setOpen={setShowEventModal}
          response={responseDetail}
          setResponseDetail={setResponseDetail}
          setTableData={setTableData}
          dataTable={tableData}
        />
      </Grid>
    </Grid>
  );
}
