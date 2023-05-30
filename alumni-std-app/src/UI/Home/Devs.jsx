import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './devs.module.css'; // Import custom CSS file
// import data from "../../TestimonialData";
import Team from './Team.json'
import img from '../../assets/testimonial-img/ahmed_hssn.jpg'
import { Container ,  Divider ,Chip,CardActions} from '@mui/material';

const Devs = (props) => {
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
    <div className={styles.team_header_container}>
        <h2 className={styles.team_header}>About The Developers.</h2>
        <p className={styles.team_desc}>Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Nam deserunt officia praesentium ratione explicabo labore <br />
         cumque voluptatem sapiente! Consectetur consequuntur quo dolores possimus voluptates <br />
          quasi tempore impedit, expedita facere ab dolorem perspiciatis quaerat officiis, <br />
          voluptatem repellat accusantium iusto sint, cum iste! Necessitatibus consequatur placeat 
          sit deserunt amet, perspiciatis eaque ea!</p>
    </div>
      <div className={styles.our_team_container}>
        <h2 className={styles.our_team_text}>Our Team</h2>
      </div>
    {/* <span className="">Testimonials</span> */}
     <Slider {...settings}>
      
            {props.data.team.map((value) => {
                return(
                     <div className={styles.container_test} >
                        <div className={styles.sub_container} >
                            <div className={styles.dev_card}>
                                <div className={styles.header_info}>
                                <img src={value.profile_img}  className={styles.testimonial_image} />
                                <div className={styles.bottom_info}>
                                    <div className={styles.dev_info}>
                                        <h5 className={styles.user_name}>{value.FullName}</h5>
                                        <p className={styles.class_off}>{value.Professional}</p>
                                    </div>
                                    <div className={styles.dev_hire}>
                                        <button className={styles.hire_btn}>Hire</button>
                                    </div>
                                </div>
                                <p className={styles.comment}>{value.details} </p>
                               
                                <div className={styles.dev_skills}>
                                    <Divider/>
                                    <br />
                                    <h4>Skills</h4>
                                    <CardActions sx={{ display: "flex", flexWrap: "wrap" }}>
                                    {value.skills.map((skill)=> {
                                        return(
                                        <Chip sx={{ mb: 2 }} label={skill} variant="filled" size="medium" key={skill} />
                                        )
                                        })}
                                </CardActions>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                </div>
                )
            })}
    </Slider>
    
   </Container>
  );
};

export default Devs;
