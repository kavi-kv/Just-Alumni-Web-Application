import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Welcome from './UI/Home/WelcomePage'
import Registration from './UI/Home/Registration'
import Login from './UI/Login/Login'
import Team from './UI/Home/Team'
import data from './UI/Home/Team.json'
import Gallary from './UI/Home/Gallary'
import Devs from './UI/Home/Devs'
// import data from './TestimonialData'
// import Test from './Test'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  
    {/* <Team data={data}/> */}
    {/* <Gallary/> */}
    {/* <Test/> */}
  {/* <Devs data={data}/> */}
  <App/>
  </div>,
)
