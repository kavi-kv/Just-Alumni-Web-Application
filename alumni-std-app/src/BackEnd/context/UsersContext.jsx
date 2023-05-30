import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

export const UsersContext = createContext();

export default function UsersContextProvider(props) {
  const [responseData, setResponseData] = useState();
  const [responseDetail, setResponseDetail] = useState();
  const [loading, setIsLoading] = useState(true);
  const [CurrentPassword, setCurrentPassword] = useState();
  const [VerificationError, setVerificationError] = useState();
  const [hasVerifyMessage, setHasVerifyMessage] = useState(false);
  const [serverMessage, setServerMessage] = useState();

  //NOTE - prefix adding component
  //FIX
  // adding element


  //  end adding element
  const UpdateStudentProfile = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);
    setServerMessage(response.data.response);
  };
  const ChangePass = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/users",
      values
    );
    console.log(response.data);
    setServerMessage(response.data.response);
  };

  const fetchCurrentPassword = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/users",
      values
    );
    console.log(response.data);
    setCurrentPassword(response.data.response);
    // if (values.passes.oldPass != response.data.response.Password) {
    //   alert("Incorrect Current Password");
    // } else alert("SUCCESS");
  };

  const VerifyUserCredentials = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/users",
      values
    );
    console.log(response.data);

    if (response.data.isValid) {
      sessionStorage.setItem("AdminEmail", response.data.response.Email);
      sessionStorage.setItem("AdminID", response.data.response.id);
      window.location = "/dashboard";
    } else
      toast.error(response.data.response, {
        position: "top-center",
        theme: "light",
        autoClose: 1000,
      });
  };

  const RegisterUser = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/users",
      values
    );
    console.log(response.data);
    loadUsers();
  };
  const EditAdmin = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/users",
      values
    );
    console.log(response.data);
    if (response.data.isProfile) setServerMessage(response.data.response);
    else
      toast.success(response.data.response, {
        theme: "light",
        position: "top-center",
        autoClose: 1000,
      });

    loadUsers();
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


    loadUsers();
  };
  const deleteUsers = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/generalApi",
      values
    );
    console.log(response.data);

    swal("Deleted!", response.data.response, "success");
    loadUsers();
  };

  const loadUsers = async () => {
    var data = {
      action: "ReadAll",
      data: {
        table: "users",
      },
    };
    const response = await axios.post(
      "http://localhost/alumni-api/generalApi",
      data
    );
    console.log(response.data);
    setResponseData(response.data);
    setIsLoading(false);
  };

  const FetchAdminDetails = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/users",
      values
    );
    console.log(response.data);
    setResponseDetail(response.data.response);
  };

  return (
    <>
      <ToastContainer theme="light" />
      <UsersContext.Provider
        value={{
          RegisterUser,
          loadUsers,
          responseData,

          deleteUsers,
          loading,
          responseDetail,
          setResponseDetail,
          publishEvents,
          FetchAdminDetails,
          EditAdmin,
          VerifyUserCredentials,
          fetchCurrentPassword,
          CurrentPassword,
          hasVerifyMessage,
          ChangePass,
          serverMessage,
        }}
      >
        {props.children}
      </UsersContext.Provider>
    </>
  );
}
