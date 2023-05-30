import { CalendarMonth, Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Divider,
  DialogContent,
  Grid,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SchoolIcon from "@mui/icons-material/School";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import VerifiedIcon from "@mui/icons-material/Verified";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import TransgenderIcon from "@mui/icons-material/Transgender";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
export default function AlumniProfileReader(props) {

  const [alumniProfile, setAlumnoProfile] = useState();
  const [isDisable, setIsDisable] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [text, setText] = useState("");

  const { responseData, setResponseData } = props.data;
  const Edit = () => {
  

    if (isDisable) {
      setText("Enable All Fields To Update The Profile");
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 3000);
    } else {
      console.log(alumniProfile);
      var data = {
        action: "UpdateAlumniProfile",
        data: responseData,
      };
      UpdateProfile(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .post("http://localhost/alumni-api/generalApi", {
        action: "ReadProfile",
        data: {
          table: "associationprofile",
        },
      })
      .then((response) => {
        console.log(response.data);
        setAlumnoProfile(response.data.response);
      })
      .catch((error) => console.log(error));
  };
  const UpdateProfile = (values) => {
    axios
      .post("http://localhost/alumni-api/generalApi", values)
      .then((response) => {
        console.log(response.data);
toast.success(response.data.response,{
  theme: "colored",
  position : "bottom-center"
})
      })
      .catch((error) => console.log(error));
  };

  const onChangeValues = (e) => {
    setResponseData({
      ...responseData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
    <ToastContainer theme="light"/>
      {responseData && (
        <Dialog open={props.open}>
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">@JUST ALUMNI PROFILE</Typography>
            <Box>
              <IconButton
                onClick={() => {
                  props.setOpen(false);
                }}
              >
                <Close color="error" />
              </IconButton>
            </Box>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container spacing={6}>
              <Grid item lg={6}>
                <img
                  src="../../alumni-logo.jpeg"
                  style={{ width: "240px", height: "250px", borderRadius: 8 }}
                />
                <Button
                  onClick={() => {
                    setIsDisable(!isDisable);
                  }}
                  color="error"
                  variant="outlined"
                >
                  {isDisable ? "Enable" : "Disable"}
                </Button>
                <Button
                  onClick={Edit}
                  color="info"
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Edit
                </Button>
                {hasError ? (
                  <Alert sx={{ mt: 2 }} severity="info">
                    <strong>{text}</strong>
                  </Alert>
                ) : null}
              </Grid>
              <Grid item lg={6}>
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Association
                    <SchoolIcon sx={{ mr: 1, color: "gray" }} />
                  </Typography>
                  <input
                    style={{ marginTop: 3, fontSize: 15 }}
                    type="text"
                    disabled={isDisable}
                    onChange={onChangeValues}
                    name="AssociationName"
                    value={responseData.AssociationName}
                    defaultValue={""}
                  />
                  {/* <Typography sx={{ mrl: 5, fontSize: 15 }}>
                    {alumniProfile.response.AssociationName}
                  </Typography> */}
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Founded
                    <CalendarMonth sx={{ mr: 1, color: "gray" }} />
                  </Typography>
                  <input
                    style={{ marginTop: 3, fontSize: 15 }}
                    type="text"
                    disabled={isDisable}
                    onChange={onChangeValues}
                    name="Founded"
                    value={responseData.Founded}
                    defaultValue={""}
                  />
                  {/* <Typography sx={{ mrl: 5, fontSize: 15 }}>
                    {alumniProfile.response.Founded}
                  </Typography> */}
                </Box>
                <Divider sx={{ my: 1 }} />

                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    President
                    <PersonIcon sx={{ mr: 1, color: "gray" }} />
                  </Typography>
                  <input
                    style={{ marginTop: 3, fontSize: 15 }}
                    type="text"
                    disabled={isDisable}
                    onChange={onChangeValues}
                    name="President"
                    value={responseData.President}
                    defaultValue={""}
                  />
                  {/* <Typography sx={{ mrl: 5, fontSize: 15 }}>
                    {alumniProfile.response.President}
                  </Typography> */}
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: 15, fontWeight: "bold" }}
                  >
                    Description
                  </Typography>
                  <textarea
                    style={{ marginTop: 3, fontSize: 15, padding: 4 }}
                    rows={8}
                    cols={28}
                    disabled={isDisable}
                    onChange={onChangeValues}
                    name="AlumniDescription"
                    value={responseData.AlumniDescription}
                    defaultValue={""}
                  ></textarea>
                  {/* <Typography sx={{ mrl: 5, fontSize: 15 }}>
                    {alumniProfile.response.AlumniDescription}
                  </Typography> */}
                </Box>
                <Divider sx={{ my: 1 }} />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
