import React from 'react'
import "./profile.css";
export default function Button(props) {
  return (
    <div className='button_container'>
         <button className={props.classes}>Save Changes</button>
    </div>
  )
}
