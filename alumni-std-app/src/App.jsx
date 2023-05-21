import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./UI/Home/Nav";
import data from "./UI/Home/about.json";
import Hero from "./UI/Home/Hero";
import Footer from "./UI/Home/Footer";
import Evemts from './UI/Events/Evemts'
import data_events from './UI/Events/events.json'
import Profile from './UI/Profile/Profile'
import Registration from "./UI/Home/Registration";
import Login from "./UI/Login/Login";
import Gallary from "./UI/Home/Gallary";
import Welcome from "./UI/Home/WelcomePage";


function App() {
  return (
    <>
    
      <div>
        
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Events" element={ <Evemts  data={data_events}/>} />
            <Route path="/profile" element={ <Profile/>} />
            <Route path="/Registration" element={ <Registration/>} />
            <Route path="/login" element={ <Login/>} />
            <Route path="/Gallary" element={ <Gallary/>} />
            <Route path="/Welcome" element={ <Welcome/>} />
            
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
