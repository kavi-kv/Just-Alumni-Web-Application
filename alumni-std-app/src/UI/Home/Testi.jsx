import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimon.css'; // Import custom CSS file
import data from "../../TestimonialData";
import img from '../../assets/testimonial-img/ahmed_hssn.jpg'
import { Container } from '@mui/material';

const TestimonialCard = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 760) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(slidesToShow);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  
  return (
   <Container>
    {/* <span className="">Testimonials</span> */}
     <Slider {...settings}>
      {data.map((testimonial, index) => (
        <div className="container-test" key={index}>
         
            <div className="testimonial-card">
              <div className='header-info'>
                <img src={testimonial.image}  className="testimonial-image" />
                {/* <h3 className='user-name'>{testimonial.name}</h3> */}
              </div>
              <p className='comment'>{testimonial.comment} </p>
              <div className='bottom-info'>
                <h5 className='user-name'>{testimonial.name}</h5>
                <p className='class-off'> :-Class of {testimonial.class_off}</p>
              </div>
            </div>
          
        </div>
      ))}
    </Slider>
   </Container>
  );
};

export default TestimonialCard;
