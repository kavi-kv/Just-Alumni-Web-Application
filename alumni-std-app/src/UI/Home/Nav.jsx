
import { Link, BrowserRouter } from 'react-router-dom';
import styles from '../../UI/style.module.css'
import Hero from './Hero';
import React,{useState} from 'react';


export default function Nav()
{
    const [isLogedIn,setIsLogedIn] = useState(false)
    return(
        
           <>
            <div className={styles.nav_container}>
                    <h4 className={styles.site_name}>JUST Alumni</h4>
                    <div className={styles.sub_container}>
                        <nav>
                            <ul className={styles.nav_list}>
                                <li>
                                    <Link exact="true" to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/Events" >Events</Link>
                                </li>
                                <li>
                                    <Link to="/Gallary" >Galleries</Link>
                                </li>
                                <li>
                                    {!isLogedIn ? <Link to="Registration/">Join</Link> : null}
                                </li>
                                <li>
                                    {isLogedIn ? <Link to="/profile" >Profile</Link> : null}
                                </li>
                            </ul>
                        </nav>
                        {!isLogedIn ? <div className={styles.reg_area}>
                            <Link to='/login'>
                                <button className={styles.login_btn}>Login </button>
                            </Link>
                        </div> : <div></div> }
                    </div>
              
                  
                </div>
                  
 
    

           </>
    

      
    )
}