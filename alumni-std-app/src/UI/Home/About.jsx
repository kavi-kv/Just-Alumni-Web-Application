import React from "react";
import styles from './about.module.css'
import { Container } from "@mui/material";



export default function About(props)
{
    return(
        
        <div className={styles.main_container}>
          <Container>
          <div className={styles.header_secton}>
                <h1 className={styles.header}>About Just Alumni</h1>
                <p className={styles.header_title}>Just Alumni is a dedicated platform for graduates from Jamhuriya University of Science and Technology, designed to foster a strong and vibrant alumni community. Our website offers a range of features, including the ability to create personalized profiles, browse job opportunities, and stay informed about upcoming events. We understand the importance of staying connected with fellow graduates and cherishing the memories made during your time at the university.
                To help you reminisce about your university days, Just Alumni also features a gallery of captivating images that capture the essence of life at Jamhuriya University. We invite you to join our growing network of accomplished alumni, share your experiences, and contribute to the ongoing success of our beloved institution. Together, we can celebrate our achievements and continue to make a lasting impact on the world.</p>
            </div>
            <div className={styles.container}>
                {props.data.about.map((value)=> {
                    return(
                 <div className={styles.card}>
                    
                    <div className={styles.card_header_container}>
                        <h3 className={styles.card_title}>{value.title}</h3>
                        <img src={value.card_logo} alt="card-logo" className={styles.card_logo}/>
                    </div>
                    <p className={styles.card_text}>{value.description}</p>
            </div>
               
                    )
                })}
            </div>
          </Container>
          
        </div>
    )
}