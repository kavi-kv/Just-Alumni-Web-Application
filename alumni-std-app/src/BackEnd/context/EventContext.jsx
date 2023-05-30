import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const EventContext = createContext();

export default function EventContextProvider(props) {
  const [responseData, setResponseData] = useState();
  const [responseDetail, setResponseDetail] = useState();
  const [loading, setIsLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState();
  const [responseEvent, setResponseEvent] = useState();
  const [unLinkResponse, setUnlinkResponse] = useState();
  const RegisterEvent = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/events_api",
      values
    );
    console.log(response.data);
    loadEvents();
  };
  const EditEvent = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/events_api",
      values
    );
    toast.success(response.data.response, {
      theme: "colored",
      position: "top-center",
      autoClose: 1000,
    });
    loadEvents();
  };

  const readAllEvents = async () => {
    var data = {
      action: "readAllEvents",
      data: {},
    };
    const response = await axios.post(
      "http://localhost/alumni-api/events_api",
      data
    );

    console.log(response.data);
    setUpcomingEvents(response.data);
  };

  const publishEvents = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/events_api",
      values
    );
    console.log(response.data);
    if (response.data.type == "active")
      toast.success(response.data.response, {
        theme: "light",
        position: "top-center",
        autoClose: 1000,
      });
    else
      toast.success(response.data.response, {
        theme: "light",
        position: "top-center",
        autoClose: 1000,
      });
    loadEvents();
  };
  const deleteEvent = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/generalApi",
      values
    );
    console.log(response.data);
    swal("Deleted!", response.data.response, "success");
    loadEvents();
  };

  const loadEvents = async () => {
    var data = {
      action: "ReadAll",
      data: {
        table: "events",
      },
    };
    const response = await axios.post(
      "http://localhost/alumni-api/generalApi",
      data
    );  
 
    setResponseData(response.data);
    setIsLoading(false);
  };
  const loadPart = async () => {
    var data = {
      action: "ReadPart",
      data: {
        table: "participations",
      },
    };
    const response = await axios.post(
      "http://localhost/alumni-api/generalApi",
      data
    );
    console.log(response.data)
    setResponseData(response.data);
    setIsLoading(false);
  };
  const Participate = async (data) => {
    var response = await axios
      .post("http://localhost/alumni-api/events_api", data)   
        setResponseEvent(response.data);
        console.log(data.data);
       readAllEvents();
  
  };
  const Unlink = async (data) => {
    var response = await axios.post(
      "http://localhost/alumni-api/events_api",
      data
    );
    setUnlinkResponse(response.data);
    console.log(data.data);
    readAllEvents();
  };
  const FetchEvent = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/events_api",
      values
    );
    console.log(response.data);
    setResponseDetail(response.data.response);
  };

  return (
    <>
      <ToastContainer theme="light" />
      <EventContext.Provider
        value={{
          RegisterEvent,
          loadEvents,
          responseData,

          deleteEvent,
          loading,
          responseDetail,
          setResponseDetail,
          readAllEvents,
          publishEvents,
          FetchEvent,
          upcomingEvents,
          EditEvent,
          responseEvent,
          Participate,
          unLinkResponse,
          Unlink,
          loadPart,
        }}
      >
        {props.children}
      </EventContext.Provider>
    </>
  );
}
