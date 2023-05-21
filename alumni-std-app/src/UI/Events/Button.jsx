import React from 'react'
import "./event.css";
export default function Button(props) {
  return (
    <div className='button_container'>
         <button onClick={props.onClick}  className={props.classes}>{props.icon}{props.text}</button>
    </div>
  )
}
