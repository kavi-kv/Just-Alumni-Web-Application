import React from "react";
import "./profile.css";
import { Container } from "@mui/material";
import me from "./download.jfif";
// import Button from "./Button";
export default function Profile() {
  return (
    <>
    <Container>
    <div className="profile_container">
      <h6 className="profile_header">My Profile </h6>
      
        <div className="profile_content">
          <div className="left_content">
            <div className="card_">
              <div className="user_image">
                <img src={me} />
              </div>
              <div className="user_title">
                <span>Abdulrahman Haaji</span>
                <span className="type">@Admin | Active</span>
              </div>
            </div>
          </div>

          <div className="right_content">
            <div className="card_">
               <div className="right_inner_content">
               <div className="form_group">
                    <label>Username</label>
                    <input type="text" placeholder="@username"/>
                </div>
               <div className="form_group">
                    <label>Email</label>
                    <input type="text" placeholder="@username"/>
                </div>
               <div className="form_group">
                    <label>Password</label>
                    <input type="text" placeholder="@username"/>
                </div>
               <div className="form_group">
                    <label>Password</label>
                    <input type="text" placeholder="@username"/>
                </div>
               <div className="form_group">
                    <label>Password</label>
                    <input type="text" placeholder="@username"/>
                </div>
               <div className="buttons">
               {/* <Button classes="save"/> */}
                 
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}
