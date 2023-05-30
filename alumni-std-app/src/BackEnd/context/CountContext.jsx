import { createContext, useState } from "react"
import axios from "axios";


export const CountContext=createContext();
export default function CountContextProvider(props) {
    const [Count,SetCount]=useState();
    const [resent,setresent]=useState();
    const [upcomingEvents, setUpComingEvents]=useState();
    const loadCount = async () => {
      var data = {
        action: "CountAll",
       
      };
      const response = await axios.post(
        "http://localhost/alumni-api/generalApi",
        data
      );
      // .then((res) => setResponseData(res.data))
      // .catch((error) => console.log(error));
      console.log(response.data);
      SetCount(response.data);
    };
    const readPublishedEvents = async () => {
      var data = {
        action: "readPublishedEvents",
        data: {
          
        }
      };
      const response = await axios.post(
        "http://localhost/alumni-api/events_api",
        data
      );
     
      console.log(response.data);
      setUpComingEvents(response.data);
    };
      const readTopAlumni = async () => {
        var data = {
          action: "readtop3",
          data: {},
        };
        const response = await axios.post(
          "http://localhost/alumni-api/AlumniStudents",
          data
        );

        console.log(response.data);
        setresent(response.data);
      };
  return (
    <>
      <CountContext.Provider
        value={{
          loadCount,
          Count,
          readPublishedEvents,
          upcomingEvents,
          readTopAlumni,
          resent,
        }}
      >
        {" "}
        {props.children}
      </CountContext.Provider>
    </>
  );
}
