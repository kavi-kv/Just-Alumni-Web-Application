// import "bootstrap/dist/css/bootstrap.css";
import {
  CardTravel,
  Dashboard,
  InsertEmoticonSharp,
  ProductionQuantityLimitsOutlined,
} from "@mui/icons-material";
import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import TocIcon from "@mui/icons-material/Toc";
import PeopleIcon from "@mui/icons-material/People";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import Layout from "../../Layout";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
import "./sidebar.css";
import AlumniProfileReader from "../pages/Modals/AlumniProfileReader";
  import axios from "axios";
const SideBar = () => {
  const [showAlumniProfileModal, setAlumniProfileModal] = useState(false);
  const [responseData, setResponseData] = useState();

  useEffect(()=>{
    if(sessionStorage.getItem("AdminEmail")==null || sessionStorage.getItem("AdminEmail")=="")
     window.location="/userAuth";
  })

  const handleView=()=>{
loadData();
setAlumniProfileModal(true)
  }

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
        setResponseData(response.data.response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Grid item lg={2} md={2} sx={{ background: "white", minHeight: "100vh" }}>
      <Box sx={{ p: 2 }}>
        <div className={styles.user_zone}>
          <Avatar sizes="large" src="../../alumni-logo.jpeg" />
          <div>
            <span className="username-title">JUST ALUMNI</span>
          </div>
        </div>
        <Divider sx={{ my: 2 }} />
        <div className={styles.list_content}>
          <Typography variant="h6" fontSize={19} sx={{ mb: 1 }}>
            Super Admin
          </Typography>
          <div className={styles.list}>
            <div className={styles.list_item}>
              <Dashboard fontSize="small" />
              <Link to={"/dashboard"} className={styles.link_title}>
                Dashboard
              </Link>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.list_item}>
              <TocIcon fontSize="small" />
              <Link to={"/AlumniList"} className={styles.link_title}>
                Alumni List
              </Link>
            </div>
          </div>
          <div className="list">
            <div className={styles.list_item}>
              <TodayIcon fontSize="small" />
              <Link to={"/Events"} className={styles.link_title}>
                Events
              </Link>
            </div>
          </div>
          <div className="list">
            <div className={styles.list_item}>
              <SpatialAudioIcon fontSize="small" />
              <Link to={"/Events/partcipations"} className={styles.link_title}>
                Participations
              </Link>
            </div>
          </div>

          <div className="list">
            <div className={styles.list_item}>
              <PeopleIcon fontSize="small" />
              <Link to={"/users"} className={styles.link_title}>
                System Users
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.list_content}>
          <Typography variant="h6" fontSize={19} sx={{ mb: 1 }}>
            Settings
          </Typography>

          <div className={styles.list}>
            <div className={styles.list_item}>
              <SettingsAccessibilityIcon fontSize="small" />
              <Link onClick={handleView} className={styles.link_title}>
                Alumni Profile
              </Link>
            </div>
          </div>
        </div>
      </Box>
      <AlumniProfileReader
        open={showAlumniProfileModal}
        setOpen={setAlumniProfileModal}
        data={{ responseData, setResponseData }}
      />
    </Grid>
  );
};

export default SideBar;
