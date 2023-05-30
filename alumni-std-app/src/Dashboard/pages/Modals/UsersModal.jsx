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
import { isAdminBlank } from "../../../Validations";
import { ToastContainer,toast } from "react-toastify";

export default function UsersModal(props) {
  const { RegisterUser } = useContext(UsersContext);
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    Email: "",
    Password: "",
  });

  const changeDetails = (e) => {
    setAdminDetails({
      ...adminDetails,
      [e.target.name]: e.target.value,
    });
  };

  const RegisterAdmin = (e) => {
    e.preventDefault();
    console.log(adminDetails);
    if (isAdminBlank(adminDetails)) {
      toast.error("Please Provide Admin Details", {
        autoClose: 2000,
      });
      return;
    }
    var data = {
      action: "RegisterUser",
      data: adminDetails,
    };
    RegisterUser(data);
    toast.success("Admin Was Registreted Successfully")
  };
  return (
    <div>
    <ToastContainer theme="light"/>
      <Dialog open={props.open}>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Add New Admin</Typography>
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
                  name="username"
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
                  style={{ marginTop: "10px" }}
                  type="email"
                />
              </div>
            </Grid>
            <Grid item lg={12}>
              <div className="form-group">
                <label style={{ marginBottom: "2px" }}>Password</label>
                <input
                  onChange={changeDetails}
                  name="Password"
                  width="100%"
                  style={{ marginTop: "10px" }}
                  type="password"
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
            onClick={RegisterAdmin}
          >
            Register Admin
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
