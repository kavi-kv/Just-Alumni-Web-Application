import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const AlumniContext = createContext();

export default function AlumniContextProvider(props) {
  const [responseData, setResponseData] = useState();
  const [responseDetail, setResponseDetail] = useState();
  const [profileData, setProfileData] = useState();
  const [loading, setIsLoading] = useState(true);
  const [CurrentPassword, setCurrentPassword] = useState(true);
  const [VerificationError, setVerificationError] = useState();
  const [hasVerifyMessage, setHasVerifyMessage] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [serverMessage, setServerMessage] = useState();
  const RegisterStudent = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);
    window.location = "/login";
  };

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
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);
    setServerMessage(response.data.response);
  };
  const verifyStudent = async (values) => {
    setLoadingVerify(true);
    var response = await axios.post(
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);
    if (response.data.type == "active") {
      toast.success(response.data.response, {
        theme: "light",
        position: "top-center",
        autoClose: 1000,
      });
    } else
      toast.success(response.data.response, {
        theme: "light",
        position: "top-center",
        autoClose: 1000,
      });
    loadStudents();
    setLoadingVerify(false);
  };
  const deleteStudent = async (values) => {
    var response = await axios.post(
      "http://localhost/alumni-api/generalApi",
      values
    );
    console.log(response.data);
    swal("Deleted!", response.data.response, "success");
    loadStudents();
  };

  const loadStudents = async () => {
    var data = {
      action: "ReadAll",
      data: {
        table: "alumnistudents",
      },
    };
    const response = await axios.post(
      "http://localhost/alumni-api/generalApi",
      data
    );
    // .then((res) => setResponseData(res.data))
    // .catch((error) => console.log(error));
    setResponseData(response.data);
    setIsLoading(false);
  };
  const VerifyUserCredentials = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);

    if (response.data.isValid) {
      if (response.data.response.Verified == "Unverified") {
        setVerificationError(
          "Your Account Still In Approving List, We've Processing That You Are Graduated Student From Jamhuuriya University. Wait With In the Next 24hrs Until Your Account Being Verified And We'll Send To Your Email Address After verified"
        );
        setHasVerifyMessage(true);

        setTimeout(() => {
          setHasVerifyMessage(false);
        }, 10000);
      } else {
        sessionStorage.setItem("username", response.data.response.Email);
        sessionStorage.setItem("alumni_id", response.data.response.MemberCode);
        window.location = "/";
      }
    } else
      toast.error(response.data.response, {
        position: "top-center",
        theme: "light",
        autoClose: 1000,
      });
  };

  const fetchStudentDetail = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);
    setResponseDetail(response.data);
    setProfileData(response.data.response);
  };
  const verifyExistanse = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);
    if (response.data.HasData) toast.error(response.data.response);
    else
    {
      var data = {
        action: "RegisterGraduate",
        data: values.data,
      };
      RegisterStudent(data);
    }
  };
  const fetchCurrentPassword = async (values) => {
    const response = await axios.post(
      "http://localhost/alumni-api/AlumniStudents",
      values
    );
    console.log(response.data);
    setCurrentPassword(response.data.response);
    // if (values.passes.oldPass != response.data.response.Password) {
    //   alert("Incorrect Current Password");
    // } else alert("SUCCESS");
  };

  return (
    <>
      <ToastContainer theme="light" position="top-center" />
      <AlumniContext.Provider
        value={{
          RegisterStudent,
          loadStudents,
          responseData,
          verifyStudent,
          deleteStudent,
          loading,
          responseDetail,
          fetchStudentDetail,
          profileData,
          VerifyUserCredentials,
          setProfileData,
          UpdateStudentProfile,
          serverMessage,
          CurrentPassword,
          fetchCurrentPassword,
          ChangePass,
          VerificationError,
          hasVerifyMessage,
          loadingVerify,
          setLoadingVerify,
          verifyExistanse,
        }}
      >
        {props.children}
      </AlumniContext.Provider>
    </>
  );
}
