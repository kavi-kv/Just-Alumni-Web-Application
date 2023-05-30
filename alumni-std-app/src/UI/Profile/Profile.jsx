import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import { Alert, Button, Container, IconButton,Typography } from "@mui/material";
import me from "./download.jfif";
import { Edit, EditAttributes, Save,Info } from "@mui/icons-material";
import { AlumniContext } from "../../BackEnd/context/AlumniStudentContext";
import PasswordModal from "./PasswordModal";
// import Button from "./Button";
export default function Profile() {
  const {
    fetchStudentDetail,
    profileData,
    setProfileData,
    UpdateStudentProfile,
    serverMessage,
  } = useContext(AlumniContext);

  const [isLive, setIsLive] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  useEffect(() => {
    var data = {
      action: "fetchStudentDetail",
      data: {
        id: sessionStorage.getItem("alumni_id"),
      },
    };
    fetchStudentDetail(data);
  }, []);

  const OnchangeValues = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const onEdit = () => {
    var data = {
      action: "UpdateStudentProfile",
      data: profileData,
    };

    UpdateStudentProfile(data);
    setIsLive(true);

    setTimeout(() => {
      setIsLive(false);
    }, 4000);
  };

  const handlePassword = () => {
    setOpenPasswordModal(true);
  };

  return (
    <>
      <Container>
        {isLive ? (
          <Alert sx={{ mx: 3, mt: 3 }} severity="success">
            <strong>{serverMessage + " 😊"}</strong>
          </Alert>
        ) : null}
        {profileData && (
          <div className="profile_container">
            <PasswordModal
              open={openPasswordModal}
              setOpen={setOpenPasswordModal}
              id={profileData.MemberCode}
            />
            <h6 className="profile_header">My Profile </h6>

            <div className="profile_content">
              <div className="left_content">
                <div className="card_">
                  <div className="user_image">
                    <img src={"../../avatar.png"} />
                  </div>
                  <div className="user_title">
                    <span>{profileData.FullName}</span>
                  </div>
                </div>
              </div>

              <div className="right_content">
                <div className="card_">
                  <div className="right_inner_content">
                    <div className="form_group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="FullName"
                        value={profileData.FullName}
                        onChange={OnchangeValues}
                        placeholder="fullname"
                      />
                    </div>
                    <div className="form_group">
                      <label>Email</label>
                      <input
                        name="Email"
                        value={profileData.Email}
                        onChange={OnchangeValues}
                        type="text"
                        placeholder="email"
                      />
                    </div>
                    <div className="form_group">
                      <label style={{ display: "flex", alignItems: "center" }}>
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
                        name="Password"
                        value={profileData.Password}
                        disabled
                        type="password"
                        placeholder="password"
                      />
                      <Typography
                        sx={{
                          fontSize: 13,
                          display: "flex",
                          alignItems: "center",
                          opacity: 0.5,
                        }}
                      >
                        <Info fontSize="small" sx={{ mr: 1 }} />
                        For Security Reason You Can't Enable This Field. To
                        Change Your Password Click The Edit Button
                      </Typography>
                    </div>
                    <div className="form_group">
                      <label>Graduated Faculty</label>
                      <input
                        name="GraduatedBatch"
                        value={profileData.GraduatedBatch}
                        disabled
                        type="text"
                        placeholder="batch"
                      />
                    </div>
                    <div className="form_group">
                      <label>Graduated Year</label>
                      <input
                        name="GraduatedYear"
                        value={profileData.GraduatedYear}
                        disabled
                        type="text"
                        placeholder="year"
                      />
                    </div>
                    <div className="buttons">
                      {/* <Button classes="save"/> */}
                      <Button startIcon={<Save />} onClick={onEdit}>
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
    </>
  );
}
