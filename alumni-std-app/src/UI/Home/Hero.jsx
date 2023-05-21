import bgvideo from '../../assets/herobgvid.mp4'
import { Link, BrowserRouter } from 'react-router-dom';
import About from './About'
import Nav from './Nav'
import TestimonialCard from './Testi'
import styles from './hero.module.css'
import data from './about.json'
import Footer from './Footer'

export default function Hero()
{

    return(
       <>
       
       <section className={styles.hero_section}>
            <div className={styles.overlay}></div>
            <video src={bgvideo} autoPlay loop muted ></video>
            <div className={styles.content}>
                <h1 className={styles.hero_title}>Welcome JUST center Graduates AKA JUST Alumni</h1>
                <h3 className={styles.hero_para}> “Education is our passport to the <br/> future, for tomorrow belongs to <br/> the people who prepare for it today.” <br/> —Malcolm X</h3>
                <div className={styles.btn_container}>
                    <Link to='/Welcome'>
                        <button className={styles.welcome_btn}>Welcome</button>
                    </Link>
                </div>
            </div>
            <div className={styles.header_container}>
           
          </div>
        </section>

 
    
    <About data={data}/>
    
    <TestimonialCard/>
       </>
    )
}