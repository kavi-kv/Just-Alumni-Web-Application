import React, { useEffect, useState } from 'react'
import "./login.css";
import { Box, Button, Checkbox, Container, Divider, Typography } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
export default function AlumniAuth() {

    const [showPass, setShowPass] = useState("password")

    
  
    
 
  return (
    <Container sx={{mt: 5}}>
 <div className="card-container">
            <div className="left-container">
                <h5 className='login-title'>Login As Alumni Member</h5>

                <span>Don't Have Account? <a href='' className='customA'>Join</a></span>
                <Divider/>

                <div className='form-group-input'>
                    <label>Email Address</label>
                    <input type='email' placeholder='example@gmail.com'/>
                </div>
                <div className='form-group-input'>
                    <label>Password</label>
                    <input type={showPass} placeholder='Enter 6 Charcetrs or more'/>

                    <div className='other'>
                <a href="" className='forgot'>Forgot Password?</a>
                <a  className='inputs'>
                <input type='checkbox' onChange={(e)=> showPass=="password"? setShowPass("text"):setShowPass("password")} className='check'/>
                Show Password</a>
              </div>
                </div>
             
                
                   
                
                <Button className='login' variant='contained' color='success'><LoginOutlined fontSize='small' sx={{mr:1,outline: "none"}}/>Login</Button>
                <Divider sx={{mt: 2}}/>
                <Typography variant='h6' sx={{fontSize: 14}}>Login Here if You're user? <a href="" className='customA'>Login</a></Typography>
            </div>
          
            <div className="right-container">
          
                {/* <img src="../../login.jpg"/> */}
            </div>
        </div>
    </Container>
   
  )
}
