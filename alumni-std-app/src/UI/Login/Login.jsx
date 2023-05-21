import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import {
  Box,
  Button,
  Checkbox,
  Container,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Close, LoginOutlined } from "@mui/icons-material";
import ForgotModal from "./ForgotModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [showPass, setShowPass] = useState("password");
  const [passwordConfiguration, setPasswordConfiguration] = useState({
    isAlumniMember: false,
    email: "",
  });
  const [openForgot, setOpenForgot] = useState(false);

  const verify = (e) => {
   toast.success("This Verification enabled Test approved hired phone",{
    position: "top-center",
    theme: "colored",


   })
  };

  return (
    <Container sx={{ mt: 5 }}>
    <ToastContainer theme="colored"/>
      <div className={styles.card_container}>
        <div className={styles.left_container}>
          <h5 className={styles.login_title}>Login</h5>

          <span>
            Don't Have Account?{" "}
            <a href="/alumni-auth" className={styles.customA}>
              Join
            </a>
          </span>
          <Divider />

          <div className={styles.form_group_input}>
            <label>Email Address</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className={styles.form_group_input}>
            <label>Password</label>
            <input type={showPass} placeholder="Enter 6 Charcetrs or more" />

            <div className="other">
              <a
                href="#"
                className="forgot"
                onClick={() => setOpenForgot(true)}
              >
                Forgot Password?
              </a>
              <a className={styles.inputs}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    showPass == "password"
                      ? setShowPass("text")
                      : setShowPass("password")
                  }
                  className={styles.check}
                />
                Show Password
              </a>
            </div>
          </div>

          <Button onClick={verify} className={styles.login} variant="contained" color="success">
            <LoginOutlined fontSize="small" sx={{ mr: 1, outline: "none" }} />
            Login
          </Button>
          <Divider sx={{ mt: 2 }} />
          <Typography variant="h6" sx={{ fontSize: 14 }}>
            Login Here if You're Alumni Member?{" "}
            <a href="" className={styles.customA}>
              Login
            </a>
          </Typography>
        </div>

        <div className={styles.right_container}>
          {/* <img src="../../login.jpg"/> */}
        </div>
      </div>

      <ForgotModal openForgot={openForgot} setOpenForgot={setOpenForgot}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Forgot Password Using Email</Typography>
          <IconButton onClick={()=>setOpenForgot(false)}>
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
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <label style={{ fontSize: 16, fontWeight: "normal" }}>
              <input
                onChange={(e) => {
                  setPasswordConfiguration({
                    ...passwordConfiguration,
                    isAlumniMember: e.target.checked,
                  });
                }}
                type="checkbox"
                style={{ marginRight: 5, fontSize: "20px" }}
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
          <Button variant="contained" color="error" onClick={()=>setOpenForgot(false)}>
            Close
          </Button>
        </DialogActions>
      </ForgotModal>
    </Container>
  );
}
