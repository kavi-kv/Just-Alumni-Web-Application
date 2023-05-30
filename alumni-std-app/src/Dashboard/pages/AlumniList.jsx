import {
  Button,
  Container,
  Paper,
  Typography,
  Divider,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import DataTables from "datatables.net-dt";
import UnpublishedIcon from "@mui/icons-material/Unpublished";

import Header from "../components/Header";
import Layout from "../../Layout";
import SideBar from "../components/sidebar";
import { AlumniContext } from "../../BackEnd/context/AlumniStudentContext";
import { Delete, Publish, Visibility } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import ViewModal from "../components/ViewModal";

export default function AlumniList() {
  const {
    loadStudents,
    responseData,
    verifyStudent,
    deleteStudent,
    fetchStudentDetail,
    responseDetail,
    loadingVerify,
    setLoadingVerify,
  } = useContext(AlumniContext);
  const [isLoading, setisLoading] = useState(true);
  const [showViewModal, setShowViewModal] = useState(false);

  const [verifyDetails, setVerifyDetails] = useState(false);
  useEffect(() => {
    loadStudents();

    setTimeout(() => {
      var data = new DataTables("#alumniLists");
      setisLoading(false);
    }, 80);
  }, []);

  const handle = () => {
    console.log(responseData);
    setVerifyDetails(true);
  };
  const handleView = (id) => {
    var data = {
      action: "fetchStudentDetail",
      data: {
        id: id,
      },
    };
    fetchStudentDetail(data);
    setShowViewModal(true);
  };

  const DeleteSTD = (values) => {
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
        deleteStudent(data);
      }
    );
  };

  const verify = (values) => {
    var data = {
      action: "VerifyUnVerify",
      data: values,
    };
    // setLoadingVerify(true);
    verifyStudent(data);
    
  };

  return (
    <Grid container>
      <ToastContainer theme="light" />
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
            <Typography variant="p">
              View And Manage Alumni List Graduates
            </Typography>
            <div>
              <Button
                variant="outlined"
                color="error"
                startIcon={<VerifiedIcon />}
                onClick={() => {
                  verify({
                    update: "all",
                  });
                }}
              >
                Verify All
              </Button>
            </div>
          </Paper>
          {loadingVerify ? (
            <Typography sx={{ mb: 2, display: "flex", alignItems: "center" }}>
              <CircularProgress fontSize="small" sx={{ mr: 2 }} />
              Verifying...
            </Typography>
          ) : null}
          <Paper sx={{ p: 3 }}>
            <table
              id="alumniLists"
              className="display mt-2 table table-bordered"
            >
              <thead>
                <tr>
                  <th>MemberCode</th>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>Batch</th>

                  <th>Verified</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {responseData
                  ? responseData.map((value) => {
                      return (
                        <tr key={value.response.MemberCode}>
                          <td>{value.response.MemberCode}</td>
                          <td>{value.response.FullName}</td>
                          <td>{value.response.Email}</td>
                          <td>{value.response.GraduatedBatch}</td>

                          <td>
                            {value.response.Verified == "Unverified" ? (
                              <Button
                                onClick={() => {
                                  verify({
                                    type: value.response.Verified,
                                    id: value.response.MemberCode,
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
                                    type: value.response.Verified,
                                    id: value.response.MemberCode,
                                    update: "one",
                                  });
                                }}
                                variant="outlined"
                                color="success"
                                startIcon={<VerifiedIcon />}
                              ></Button>
                            )}
                          </td>
                          <td>
                            <IconButton
                              onClick={() =>
                                DeleteSTD({
                                  DeleteId: value.response.MemberCode,
                                  id: "MemberCode",
                                  table: "alumnistudents",
                                })
                              }
                            >
                              <Delete color="error" />
                            </IconButton>
                            <IconButton
                              onClick={() =>
                                handleView(value.response.MemberCode)
                              }
                            >
                              <Visibility />
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
        <ViewModal
          response={responseDetail}
          open={showViewModal}
          setOpen={setShowViewModal}
        />
      </Grid>
    </Grid>
  );
}
