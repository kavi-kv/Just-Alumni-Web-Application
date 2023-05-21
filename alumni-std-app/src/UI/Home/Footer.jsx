import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import alumni_logo from '../../../public/alumni_logo.png'

import styles from './footer.module.css'

export default function Footer() {

    return(
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.alumni_container}>
                    <div className={styles.footer_header}>
                        <img src={alumni_logo} alt="" className={styles.alumni_logo} 
                       />
                    <h2>Just Alumni</h2>
                    </div>
                    <br />
                    <div className={styles.social_media}>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>
                    </div>
                </div>
                <div className={styles.footer_info}>
                    <h3 className={styles.info_header}>Details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt officiis dignissimos perferendis corporis sequi laboriosam reiciendis, distinctio iste eius temporibus!</p>
                </div>
                <div className={styles.footer_help}>
                    <h3>Help</h3>
                    <br />
                    <p className={styles.a_tags}><a href="#">Support</a></p>
                    <br />
                    <p className={styles.a_tags}><a href="#">Sign Up</a></p>
                    <br />
                    <p className={styles.a_tags}><a href="#">Sign In</a></p>
                </div>  
                <div className={styles.contacts}>
                    <h3>Contacts</h3>
                    <h5> Phone Number: +252616265323</h5>
                    <h5> Fax: +11123321111367</h5>
                    <h5> Email: just@alumni.com</h5>
                </div>
                <div className={styles.subs_section}>
                    <input type="email" placeholder='Enter Email'/>
                    <button className={styles.subs_btn}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}