import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard";
import "./style.module.css";
import React, { useState, useEffect } from "react";
import Profile from "../pages/Profile/Profile";
import MainDashboard from "./MainDashboard";
import { Divider } from "@mui/material";
import Login from "../../Login/Login";
import Layout from "../../Layout";
import AlumniList from "../pages/AlumniList";
import Events from "../pages/Events";
const Content = () => {
  return (
    <div className="main_content">
     

      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/AlumniList" element={<AlumniList />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
