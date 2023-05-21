import {React,useState} from "react"
import './testimon.css'
import data from '../../TestimonialData'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Card(props)
{
    
    return(
        <div className="testimonial-card">
            <div className="header-info">
                <img src={props.image}/>
                <h1 className="user-name">{props.name}</h1>
            </div>
            <p className="comment">{props.comment}</p>
            <h4 className="class-off">{props.class_off}</h4>
        </div>
    )
}