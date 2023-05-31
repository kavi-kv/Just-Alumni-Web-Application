import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Welcome from "./UI/Home/WelcomePage";
import Registration from "./UI/Home/Registration";
import Login from "./UI/Login/Login";
import Team from "./UI/Home/Team";
import data from "./UI/Home/Team.json";
import Gallary from "./UI/Home/Gallary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
  
    {/* <Team data={data}/> */}
    {/* <Gallary/> */}
    <App/>
  
  </div>,
)
