import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Divider,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { Close, Info } from "@mui/icons-material";
import { useContext, useState } from "react";
import { UsersContext } from "../../../BackEnd/context/UsersContext";

export default function AdminEditModal(props) {
  const { responseDetail,setResponseDetail } = props.AllData;
  const { RegisterUser, EditAdmin } = useContext(UsersContext);
 

  const changeDetails = (e) => {
    setResponseDetail({
      ...responseDetail,
      [e.target.name]: e.target.value,
    });
  };

  const EditAdminDetails = (e) => {
    e.preventDefault();
    console.log(responseDetail);
    var data = {
      action: "EditAdminDetails",
      data: responseDetail,
    };
    EditAdmin(data);
    setTimeout(() => {
        props.setOpen(false)
    }, 2000);
  };
  return (
    <div>
      {responseDetail && (
        <Dialog open={props.open}>
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Edit Admin Details</Typography>
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
                  <label style={{ marginBottom: "2px" }}>Username</label>
                  <input
                    onChange={changeDetails}
                    value={responseDetail.Username}
                    name="Username"
                    width="100%"
                    type="text"
                    style={{ marginTop: "10px" }}
                  />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className="form-group">
                  <label style={{ marginBottom: "2px" }}>Email</label>
                  <input
                    onChange={changeDetails}
                    name="Email"
                    width="100%"
                    value={responseDetail.Email}
                    style={{ marginTop: "10px" }}
                    type="email"
                  />
                </div>
              </Grid>

              <Grid item lg={12}>
                <div className="form-group">
                  <label style={{ marginBottom: "2px" }}>Type</label>
                  <input
                    value={"Admin"}
                    disabled
                    width="100%"
                    style={{ marginTop: "10px" }}
                    type="text"
                  />
                </div>
                <Typography
                  sx={{
                    opacity: 0.5,
                    fontSize: 17,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Info fontSize="small" sx={{ mr: 1 }} />
                  Register Based On Admin Only
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              onClick={EditAdminDetails}
            >
              Edit Admin
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
