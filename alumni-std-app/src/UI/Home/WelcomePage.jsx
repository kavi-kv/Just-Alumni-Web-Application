import React from "react";
import president_image from '../../../public/maftuh.jpg'
import styles from './welcome.module.css'

export default function Welcome()
{

    return(
        <>
        <div className={styles.welcome_container}>
            <div className={styles.pressident_info}>
                <img src={president_image} alt="" className={styles.president_image} />
                <p className={styles.pressident_name}>MAFTUH MOHAMED ABDI</p>
                <p className={styles.press_president}>PRESIDENT</p>
            </div>
            {/* <div className={styles.content_header}>
                <h2 className={styles.press_title}>Welcome To The Home Of Quality And Education</h2>
            </div> */}
            <div className={styles.welcome_content}>
            <h2 className={styles.press_title}>Welcome To The Home Of Quality And Education</h2>
                <p className={styles.alumni_desc}>
                Jamhuriyah Alumni is a community of former students who have graduated from Jamhuriyah University, a prestigious institution of higher learning located in the heart of the capital city. The alumni association serves as a platform for graduates to connect, network, and collaborate with each other, as well as with the university and its current students.
                <br />
                The Jamhuriyah Alumni community is diverse, comprising individuals from various academic disciplines, professions, and backgrounds. Members of the association include successful entrepreneurs, renowned academics, prominent politicians, and accomplished artists, among others. This diversity fosters a rich and dynamic exchange of ideas, experiences, and perspectives, which benefits both the alumni and the wider society.
                <br />
                The alumni association offers a range of services and benefits to its members, including career development resources, mentorship opportunities, social events, and access to the university's facilities and resources. These services are designed to support the professional and personal growth of alumni, as well as to strengthen their ties to the university and to each other.
                <br />
                In addition to serving its members, the Jamhuriyah Alumni association also plays an important role in promoting the university's mission and values. Alumni serve as ambassadors of the university, representing its excellence and commitment to academic and social progress. They also contribute to the university's development by providing feedback, support, and resources to enhance its programs and initiatives.
                <br />
                Overall, the Jamhuriyah Alumni community is a vibrant and dynamic network of individuals who share a common bond of excellence, achievement, and commitment to making a positive impact in the world. Whether through professional collaborations, social connections, or community engagement, alumni continue to embody the spirit of Jamhuriyah University and to inspire future generations of students to pursue their dreams and aspirations.
                </p>
            </div>
            <div className={styles.main_content_info}>
                <div className={styles.contact_info}>
                    <h1 className={styles.contact_header}>Addresses</h1>
                    <h4 className={styles.just_addresses}>Main Campus (Digfeer)</h4>
                    <p className={styles.just_addresses}>Digfeer Street,Hodan District <br /> Muqdisho, Somalia</p>
                
                    <h4 className={styles.just_addresses}>Campus 2 (Banaadir)</h4>
                    <p className={styles.just_addresses}>Banadir Street,Hodan District <br /> Muqdisho, Somalia </p>
                   
                    <h4 className={styles.just_addresses}>Campus 3 (Banaadir)</h4>
                    <p className={styles.just_addresses}>Banadir Street,Hodan District <br /> Muqdisho, Somalia </p>
                </div>
                <div className={styles.social_media_container}>
                    <h1 className={styles.social_media_header}>Contact Us</h1>
                </div>

            </div>
        </div>
        </>
    )
}