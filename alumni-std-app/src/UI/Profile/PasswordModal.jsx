import { Close } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { AlumniContext } from "../../BackEnd/context/AlumniStudentContext";

export default function PasswordModal(props) {
  const [text, setText] = useState(true);
  const [errorMessage, seterrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const { fetchCurrentPassword, CurrentPassword, ChangePass, serverMessage } =
    useContext(AlumniContext);
  const [avialableServer, setAvialable] = useState(false);
  const [passwordDetail, setPass] = useState({
    oldPass: "",
    newPass: "",
  });

  const changePassDetails = (e) => {
    setPass({
      ...passwordDetail,
      [e.target.name]: e.target.value,
    });
  };

  const FetchAndChange = (e) => {
    if (passwordDetail.oldPass == "" || passwordDetail.newPass == "") {
      seterrorMessage(
        "All Fields Are required, Please Fill Current Password And new password To Change."
      );
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 4000);
    } else {
      var data = {
        action: "fetchCurrentPassword",
        passes: passwordDetail,
        data: {
          id: props.id,
        },
      };
      fetchCurrentPassword(data);
      if (passwordDetail.oldPass != CurrentPassword.Password) {
        {
          seterrorMessage("Incorrect Current Password, Provide Valid Password");
          setHasError(true);
          setTimeout(() => {
            setHasError(false);
          }, 4000);
        }
      } else if (passwordDetail.oldPass == passwordDetail.newPass) {
        seterrorMessage("New Password Cannot Same As Old Password");
        setHasError(true);
        setTimeout(() => {
          setHasError(false);
        }, 4000);
      } else {
        setHasError(false);
        var data = {
          action: "ChangePassword",

          data: {
            id: props.id,
            newPass: passwordDetail.newPass,
          },
        };

        ChangePass(data);
        setAvialable(true);

        setTimeout(() => {
          setAvialable(false);
        }, 4000);
      }
    }
  };

  return (
    <div>
      <Dialog open={props.open}>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Change Password</Typography>

          <Box>
            <IconButton
              onClick={() => {
                props.setOpen(false);
                setText(true);
              }}
            >
              <Close color="error" />
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ p: 5 }}>
          {hasError ? (
            <Alert severity="error">
              <strong>{hasError ? errorMessage : serverMessage}</strong>
            </Alert>
          ) : avialableServer ? (
            <Alert severity="success">
              <strong>{serverMessage}</strong>
            </Alert>
          ) : (
            <Typography>
              Provide Current Password To Get New One, Old Password And New One
              Can't Be Same{" "}
            </Typography>
          )}

          <Box sx={{ mt: 2 }}>
            <Typography>Current Password *</Typography>
            <input
              name="oldPass"
              onChange={changePassDetails}
              type={text ? "password" : "text"}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography>New Password *</Typography>
            <input
              name="newPass"
              onChange={changePassDetails}
              type={text ? "password" : "text"}
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <label style={{ fontSize: 18 }}>
              <Checkbox onChange={(e) => setText(!text)} fontSize="small" />
              Show Password(s)
            </label>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={FetchAndChange}
              color="success"
              variant="contained"
            >
              Change
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
