import { Dialog } from "@mui/material";
import React from "react";

export default function ForgotModal(props) {
  return (
    <div>
     {props.type=="forgotModal"? <Dialog open={props.openForgot}>{props.children}</Dialog> : 
     <Dialog open={props.openForgot}>{props.children}</Dialog>} 
    </div>
  );
}
