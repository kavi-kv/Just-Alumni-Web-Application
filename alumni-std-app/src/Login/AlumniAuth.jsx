import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import styles from "./style.module.css";

import {
  Box,
  Button,
  Checkbox,
  Container,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Close, LoginOutlined, VisibilityOff } from "@mui/icons-material";
import ForgotModal from "./ForgotModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { UsersContext } from "../BackEnd/context/UsersContext";

export default function AlumniAuth() {
  // useLayoutEffect(()=>{
  //   document.body.style.background='red'
  // })

  const { VerifyUserCredentials } = useContext(UsersContext);
  
  const [userCrediatls, setUserCredentials] = useState({
    email: "",
    password: "",
  });

    const changeCred = (e) => {
      setUserCredentials({
        ...userCrediatls,
        [e.target.name]: e.target.value,
      });
    };


      const Login = () => {
        if (userCrediatls.email == "" || userCrediatls.password == "")
          toast.error("Email And Password is Required...", {
            position: "top-center",
            theme: "light",
            autoClose: 1000,
          });
        else {
          var data = {
            action: "VerifyUserCredentials",
            data: userCrediatls,
          };
          VerifyUserCredentials(data);
        }

        // window.location="/dashboard";
      };



  const [showPass, setShowPass] = useState("password");
  const [passwordConfiguration, setPasswordConfiguration] = useState({
    isAlumniMember: false,
    email: "",
  });

  const [openForgot, setOpenForgot] = useState({
    forgotModal: {
      initialShow: false,
    },
    OTPModal: {
      initialShow: false,
    },
    type: "forgotModal",
  });

  const verify = (e) => {

    toast.success(`${passwordConfiguration.isAlumniMember}`, {
      position: "top-center",
      theme: "light",
    });
  };
  const handleOpen = (e) => {
    setOpenForgot({
      ...openForgot,
      forgotModal: {
        initialShow: true,
      },
    });
  };

  return (
    <Container sx={{ mt: 5 }}>
      <ToastContainer theme="light" />
      <div className={styles.card_container}>
        <div className={styles.left_container}>
          <h5 className={styles.login_title}>Login</h5>

          {/* <span>
            Don't Have Account?{" "}
            <a href="/Registration/" className={styles.customA}>
              Join
            </a>
          </span> */}
          <Divider style={{ marginBottom: 20 }} />

          <div className={styles.form_group_input}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              onChange={changeCred}
              placeholder="example@gmail.com"
            />
          </div>
          <div className={styles.form_group_input}>
            <label>Password</label>
            <input
              name="password"
              onChange={changeCred}
              type={showPass}
              placeholder="Enter 6 Charcetrs or more"
            />

            <div className={styles.other}>
              {/* <a href="#" className={styles.forgot} onClick={handleOpen}>
                Forgot Password?
              </a> */}

              <a
                href="#"
                onClick={() => {
                  showPass == "text"
                    ? setShowPass("password")
                    : setShowPass("text");
                }}
              >
                {showPass == "text" ? "Hide Password" : "Show Password"}
              </a>
            </div>
          </div>

          <Button onClick={Login} className={styles.login} variant="contained" color="success">
            <LoginOutlined fontSize="small" sx={{ mr: 1, outline: "none" }} />
            Login
          </Button>
          <Divider sx={{ mt: 2 }} />
          <Typography variant="h6" sx={{ fontSize: 14 }}>
            Login Here if You're Alumni? <a href="/login"> Login</a>
          </Typography>
        </div>

        <div className={styles.right_container}>
          {/* <img src="../../login.jpg"/> */}
        </div>
      </div>

      <ForgotModal
        type={openForgot.type}
        openForgot={openForgot.forgotModal.initialShow}
        setOpenForgot={setOpenForgot}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Forgot Password Using Email</Typography>
          <IconButton
            onClick={() => {
              setOpenForgot({
                ...openForgot,
                forgotModal: {
                  initialShow: false,
                },
              });
            }}
          >
            <Close color="error" />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ p: 3 }}>
          <Typography component={"p"}>
            Forgot Your Pass by using your email registered in this site.
            Provide if You're alumni member or not by click check below
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <strong>Email</strong>
            <input
              onChange={(e) => {
                setPasswordConfiguration({
                  ...passwordConfiguration,
                  email: e.target.value,
                });
              }}
              width="100%"
              placeholder="exmaple@gmail.com"
              type="text"
              className={styles.forgot_input}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <label
              style={{
                fontSize: 16,
                fontWeight: "normal",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                onChange={(e) => {
                  setPasswordConfiguration({
                    ...passwordConfiguration,
                    isAlumniMember: e.target.checked,
                  });
                }}
              />
              Are Your Alumni Member?
            </label>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="contained" color="primary" onClick={verify}>
            Verify
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setOpenForgot({
                ...openForgot,
                forgotModal: {
                  initialShow: false,
                },
              });
            }}
          >
            Close
          </Button>
        </DialogActions>
      </ForgotModal>
    </Container>
  );
}
