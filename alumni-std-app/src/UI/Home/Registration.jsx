import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import styles from "./Registration.module.css";
import Btn from "../Events/Button";
import { useState, useEffect, useContext } from "react";
import regLogo from "./images.png";
import { AlumniContext } from "../../BackEnd/context/AlumniStudentContext";
import data from "../../../AlumniLocalData.json";
import isBlank, { isValidUniID } from "../../Validations";
import { checkLength } from "../../Validations";
import { toast, ToastContainer } from "react-toastify";

const Registration = () => {
  const { RegisterStudent, verifyExistanse } = useContext(AlumniContext);

  const [years, setYears] = useState([
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ]);

  const [file, setFile] = useState();

  const handleFile = (e) => {
    setStudentDetails({
      ...studentDetails,
      photo: e.target.files[0],
    });
  };

  useEffect(() => {
    if (!years.includes(new Date().getFullYear()))
      setYears([...years, new Date().getFullYear()]);
  }, []);

  const [studentDetails, setStudentDetails] = useState({
    fullName: "",
    gender: "",
    email: "",
    password: "",
    mobile: "",
    uniID: "",
    batch: "",
    year: "",
  });

  const registerStudent = (e) => {
    e.preventDefault();

    if (isBlank(studentDetails))
      toast.error("All Information Must Provide..", {
        position: "top-center",
        autoClose: 2000,
      });
    // checkLength(studentDetails)
    else if (checkLength(studentDetails.password))
      toast.error("Password Must be 6 characters or greater", {
        position: "top-center",
        autoClose: 2000,
      });
    else if (isValidUniID(studentDetails)) {
      var data = {
        action: "verifyExistanse",
        data: studentDetails,
      };
      verifyExistanse(data);
    } else
      toast.error(
        "UniversityID Must begin Faculty Prefix Character Eg. C120 or E19",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );

    // window.location="/login";
  };

  const changeStudentDetails = (e) => {
    setStudentDetails({
      ...studentDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <div class={styles.reg_container}>
        <header>
          <div>
            Join Jamhuuriya Alumni Students
            <Typography variant="h6" color={"error"}>
              Provide Required Information
            </Typography>
          </div>

          <img src={"../../alumni-logo.jpeg"} />
        </header>
        <Divider />
        <form onSubmit={registerStudent} class={styles.form}>
          <div className={styles.form_group}>
            <div className={styles.details}>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={changeStudentDetails}
              />
            </div>
            <div className={styles.details}>
              <label>Gender</label>
              <select
                onChange={changeStudentDetails}
                name="gender"
                className={styles.batch}
              >
                <option value={""}>Select</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
              </select>
            </div>
          </div>
          <div className={styles.form_group}>
            <div className={styles.details}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={changeStudentDetails}
              />
            </div>
            <div className={styles.details}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={changeStudentDetails}
              />
            </div>
          </div>

          <div className={[styles.details, styles.mobile_].join("  ")}>
            <label>Mobile</label>
            <input
              type="number"
              name="mobile"
              onChange={changeStudentDetails}
            />
          </div>
          <div className={styles.form_group}>
            <div className={styles.details}>
              <label>University ID</label>
              <input type="text" name="uniID" onChange={changeStudentDetails} />
            </div>
            <div className={styles.details}>
              <label>Batch *</label>
              <select
                name="batch"
                onChange={changeStudentDetails}
                className={styles.batch}
              >
                <option value={""}>Select</option>
                {data.faculties.map((value) => {
                  return <option value={value.name}>{value.name}</option>;
                })}
              </select>
            </div>
          </div>
  
          <div className={[styles.details, styles.mobile_].join("  ")}>
            <label>Graduated Year *</label>
            <select
              onChange={changeStudentDetails}
              name="year"
              className={styles.batch}
            >
              <option value={""}>Select</option>
              {years.map((year) => {
                return <option>{year}</option>;
              })}
            </select>
          </div>

          <div className={styles.buttons_action}>
            <Button
              type="submit"
              // onClick={registerStudent}
              sx={{ mt: 3 }}
              variant="contained"
              color="success"
            >
              {" "}
              Register
            </Button>
          </div>
        </form>
        <Divider sx={{ mt: 2 }} />
        <Typography variant="p" sx={{ mt: 1, fontSize: 13 }}>
          This Page Can Use Only Alumni Students (JUST), If You've Account
          <a href="/login">Click Here To Login</a>
        </Typography>
      </div>

      <Dialog open={false}>
        <Divider />
        <DialogContent>
          <img style={{ borderRadius: 8 }} width={"90%"} />
        </DialogContent>
        <DialogActions>
          {/* <Button */}
          <Button variant="contained" color="success">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Registration;
