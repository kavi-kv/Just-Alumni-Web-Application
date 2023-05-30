import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Nav from "./UI/Home/Nav";
import data from "./UI/Home/about.json";
import Hero from "./UI/Home/Hero";
import Footer from "./UI/Home/Footer";
import Evemts from "./UI/Events/Evemts";
import data_events from "./UI/Events/events.json";
import Registration from "./UI/Home/Registration";
import Gallary from "./UI/Home/Gallary";
import Welcome from "./UI/Home/WelcomePage";
import Layout from "./Layout";
import AlumniAuth from "./Login/AlumniAuth";
import Dashboard from "./Dashboard/components/dashboard";
import AlumniList from "./Dashboard/pages/AlumniList";
import Events from "./Dashboard/pages/Events";
import Profile from "./UI/Profile/Profile";
// import Profile from "./Dashboard/pages/Profile/Profile";
import Users from "./Dashboard/pages/Users";
import Jobs from "./Dashboard/pages/Jobs";
import AlumniContextProvider  from "./BackEnd/context/AlumniStudentContext";
import EventContextProvider from "./BackEnd/context/EventContext";
import UsersContextProvider from "./BackEnd/context/UsersContext";
import CountContextProvider, { CountContext } from "./BackEnd/context/CountContext";
import  UserProfile from "./Dashboard/pages/Profile/Profile";
import Participate from "./Dashboard/pages/Participate";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Layout>
            <Nav />
          </Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="/AlumniEvents"
              element={
                <EventContextProvider>
                  <Evemts data={data_events} />
                </EventContextProvider>
              }
            />
            <Route
              path="/Alumni/profile"
              element={
                <AlumniContextProvider>
                  <Profile />
                </AlumniContextProvider>
              }
            />
            <Route
              path="/Registration"
              element={
                <AlumniContextProvider>
                  <Registration />
                </AlumniContextProvider>
              }
            />
            <Route
              path="/login"
              element={
                <AlumniContextProvider>
                  <Login />
                </AlumniContextProvider>
              }
            />
            <Route
              path="/userAuth"
              element={
                <UsersContextProvider>
                  <AlumniAuth />
                </UsersContextProvider>
              }
            />
            <Route
              path="/dashboard"
              element={
                <CountContextProvider>
                  <Dashboard />
                </CountContextProvider>
              }
            ></Route>
            <Route path="/Gallary" element={<Gallary />} />
            <Route path="/Welcome" element={<Welcome />} />

            <Route
              path="/AlumniList"
              element={
                <AlumniContextProvider>
                  <AlumniList />
                </AlumniContextProvider>
              }
            ></Route>
            <Route
              path="/Events"
              element={
                <EventContextProvider>
                  <Events />
                </EventContextProvider>
              }
            ></Route>
            <Route
              path="/Events/partcipations"
              element={
                <EventContextProvider>
                <Participate/>
                </EventContextProvider>
              }
            ></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route
              path="/users"
              element={
                <UsersContextProvider>
                  <Users />
                </UsersContextProvider>
              }
            ></Route>
            <Route
              path="/User/profile"
              element={
                <UsersContextProvider>
                 <UserProfile/>
                </UsersContextProvider>
              }
            ></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
          </Routes>
          {/* <Footer /> */}
          {/* <br />
          <br /> */}
          <Layout>
            <Footer />
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
