import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from "@mui/material";
import styles from "./Registration.module.css";
import Btn   from "../Events/Button";
import { useState } from "react";
import regLogo from './images.png'

const Registration = () => {

  const [view, setView]=useState();
  const [url,setUrl]=useState();

  const handleFile=(e)=>{
    var url_view=URL.createObjectURL(e.target.files[0]);
    setUrl(url_view);
    setView(true);
  }
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

          <img src={regLogo}/>
        </header>
        <Divider />
        <form action="" class={styles.form}>
          <div className={styles.form_group}>
            <div className={styles.details}>
              <label>Full Name</label>
              <input type="text" />
            </div>
            <div className={styles.details}>
              <label>Gender</label>
              <div className={styles.gender}>
                <label className={styles.genderLabel}>
                  <input
                    type="radio"
                    className={styles.genderMale}
                    name="gender"
                    value={"Male"}
                  />
                  Male
                </label>
                <label className={styles.genderLabel}>
                  <input
                    type="radio"
                    className={styles.genderFemale}
                    name="gender"
                    value={"Female"}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className={styles.form_group}>
            <div className={styles.details}>
              <label>Email</label>
              <input type="text" />
            </div>
            <div className={styles.details}>
              <label>Password</label>
              <input type="text" />
            </div>
          </div>

          <div className={[styles.details , styles.mobile_].join("  ")}>
            <label>Mobile</label>
            <input type="text" />
          </div>
          <div className={styles.form_group}>
            <div className={styles.details}>
              <label>University ID</label>
              <input type="text" />
            </div>
            <div className={styles.details}>
              <label>Batch *</label>
              <select className="batch">
                <option>Batch (select)</option>
              </select>
            </div>
          </div>
          <div className={styles.form_group}>
            <div className={styles.details}>
              <label>Graduated Year *</label>
              <select className="batch">
                <option>Batch (select)</option>
              </select>
            </div>
            <div className={[styles.details, styles.photo_section]}>
              <div className={styles.photo_uploader}>
                <label>BG-WHITE Image</label>
                <input onChange={handleFile} type="file" />
              </div>
            </div>
          </div>
          <div className={styles.buttons_action}>
            <Btn classes={styles.register} text="Save" />
          </div>
        </form>
      </div>

      <Dialog  open={view}>
        <DialogTitle>Image Viewer</DialogTitle>
        <Divider/>
        <DialogContent>
        <img style={{"borderRadius": 8}} width={"90%"} src={url}/>
        </DialogContent>
        <DialogActions>
        {/* <Button */}
        <Button variant='contained' color="success" onClick={()=>setView(false)} >Ok</Button>

        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Registration;
