import {
  Button,
  Container,
  Paper,
  Typography,
  Divider,
  Grid,
  IconButton,
  Chip,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import DataTables from "datatables.net-dt";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import { EventContext } from "../../BackEnd/context/EventContext";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Header from "../components/Header";
import Layout from "../../Layout";
import SideBar from "../components/sidebar";
import EventsModal from "./Modals/EventsModal";
import { Check, Delete, Edit, Publish } from "@mui/icons-material";
import { UsersContext } from "../../BackEnd/context/UsersContext";
import UsersModal from "./Modals/UsersModal";
import AdminEditModal from "./Modals/AdminEditModal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export default function Users() {
  // const [responseData,setresponseData]=useState([]);
  const {
    loadUsers,
    responseData,
    publishEvents,
    deleteUsers,
    FetchAdminDetails,
    responseDetail,
    setResponseDetail
  } = useContext(UsersContext);

  const [showEventModal, setShowEventModal] = useState(false);
  const [showAdminModal, setAdminModal] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [modalType, setModalType] = useState("");
  useEffect(() => {
    loadUsers();
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

  const DeleteUsers = (values) => {
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
          deleteUsers(data);
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


  const handleEdit=(id)=>{
    var data = {
      action: "FetchAdminDetails",
      data: {
        id: id,
      },
    };
    FetchAdminDetails(data);
    setAdminModal(true);
  }

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
            <Typography variant="p">View And Manage Admins List</Typography>
            <div>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  setModalType("add");
                  setShowEventModal(true);
                }}
              >
                Add Admin
              </Button>
            </div>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <table id="eventList" className="display mt-2 table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {responseData
                  ? responseData.map((value) => {
                      return (
                        <tr key={value.response.id}>
                          <td>{value.response.id}</td>
                          <td>{value.response.Username}</td>
                          <td>{value.response.Email}</td>

                          <td>
                            <Chip label={value.response.Type} />
                          </td>

                          <td>
                            <IconButton
                              onClick={() =>
                                DeleteUsers({
                                  id: "id",
                                  DeleteId: value.response.id,
                                  table: "users",
                                })
                              }
                            >
                              <Delete  color='error'/>
                            </IconButton>
                            <IconButton
                              onClick={() => handleEdit(value.response.id)}
                            >
                              <Edit color='success'/>
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

        <UsersModal open={showEventModal} setOpen={setShowEventModal} />
        <AdminEditModal AllData={{responseDetail,setResponseDetail}}  open={showAdminModal} setOpen={setAdminModal} />
      </Grid>
    </Grid>
  );
}
