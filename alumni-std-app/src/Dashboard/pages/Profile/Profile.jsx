import React, { useContext, useEffect,useState } from "react";
import "./profile.css";
import me from "./me.jpeg";
import { Alert, Button, Container, Grid, Typography } from "@mui/material";
import SideBar from "../../components/sidebar";
import Header from "../../components/Header";
import { UsersContext } from "../../../BackEnd/context/UsersContext";
import {IconButton} from "@mui/material";
import { Edit, Info } from "@mui/icons-material";
import PasswordModal from "../../components/PasswordModal";
export default function UserProfile() {
  const {
    FetchAdminDetails,
    responseDetail,
    serverMessage,
    setResponseDetail,
    EditAdmin,
  } = useContext(UsersContext);
  const [isLive, setIsLive] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  useEffect(() => {
    loadProfileData();
  }, []);

    const onEdit = () => {
      var data = {
        action: "UpdateAdminProfile",
        data: responseDetail,
      };

      EditAdmin(data);
      setIsLive(true);

      setTimeout(() => {
        setIsLive(false);
      }, 4000);
    };
   const handlePassword = () => {
     setOpenPasswordModal(true);
   };
  const OnchangeValues = (e) => {
    setResponseDetail({
      ...responseDetail,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges=(e)=>{

  }
  const loadProfileData = () => {
    var data = {
      action: "FetchAdminDetails",
      data: {
        id: sessionStorage.getItem("AdminID"),
      },
    };
    FetchAdminDetails(data);
  };
  return (
    <>
      <PasswordModal open={openPasswordModal} setOpen={setOpenPasswordModal} />{" "}
      <Grid container>
        <SideBar />
        <Grid item lg={10}>
          <Header />{" "}
          <Container>
            {isLive ? (
              <Alert sx={{ mx: 3, mt: 3 }} severity="success">
                <strong>{serverMessage + " 😊"}</strong>
              </Alert>
            ) : null}
            {responseDetail && (
              <div className="profile_container">
                <h6 className="profile_header">My Profile </h6>

                <div className="profile_content">
                  <div className="left_content">
                    <div className="card_">
                      <div className="user_image">
                        <img src={"../../avatar.png"} />
                      </div>
                      <div className="user_title">
                        <span>{responseDetail.Username}</span>
                        <span className="type">
                          {responseDetail.Type} | {responseDetail.Status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="right_content">
                    <div className="card_">
                      <div className="right_inner_content">
                        <div className="form_group">
                          <label>Username</label>
                          <input
                            onChange={OnchangeValues}
                            name="Username"
                            type="text"
                            value={responseDetail.Username}
                            placeholder="@username"
                          />
                        </div>
                        <div className="form_group">
                          <label>Email</label>
                          <input
                            onChange={OnchangeValues}
                            name="Email"
                            type="text"
                            value={responseDetail.Email}
                            placeholder="@username"
                          />
                        </div>
                        <div className="form_group">
                          <label
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            Password{" "}
                            <IconButton
                              onClick={handlePassword}
                              title="Change Security Setting"
                            >
                              <Edit
                                fontSize="small"
                                sx={{ fontSize: 18, cursor: "pointer" }}
                              />
                            </IconButton>{" "}
                          </label>
                          <input
                            type="password"
                            disabled
                            value={responseDetail.Password}
                            placeholder="@username"
                          />
                          <Typography sx={{ fontSize: 13,display: "flex",alignItems:"center" ,opacity: 0.5}}>
                            <Info fontSize="small"  sx={{mr: 1}}/>
                            For Security Reason You Can't Enable This Field. To
                            Change Your Password Click The Edit Button
                          </Typography>
                        </div>

                        <div className="buttons">
                          <Button
                            onClick={onEdit}
                            variant="outlined"
                            color="success"
                          >
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
