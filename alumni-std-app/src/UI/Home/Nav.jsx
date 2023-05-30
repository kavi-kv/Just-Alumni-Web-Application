
import { Link, BrowserRouter } from "react-router-dom";
import styles from "../../UI/style.module.css";
import Hero from "./Hero";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [isLogedIn, setIsLogedIn] = useState(false);



  return (
    <>
      <div className={styles.nav_container}>
        <h4 className={styles.site_name}>JUST Alumni</h4>
        <div className={styles.sub_container}>
          <nav>
            <ul className={styles.nav_list}>
              <li>
                <Link exact="true" to="/">
                  Home
                </Link>
              </li>
              <li>
                {sessionStorage.getItem("username") && (
                  <Link to="/AlumniEvents">Events</Link>
                )}
              </li>
              <li>
                <Link to="/Gallary">Galleries</Link>
              </li>
              <li>
                {!sessionStorage.getItem("username") && (
                  <Link onClick={() => (window.location = "Registration/")}>
                    Join
                  </Link>
                )}
              </li>
              <li>
                {" "}
                {sessionStorage.getItem("username") && (
                  <Link to="/Alumni/profile">Profile</Link>
                )}
              </li>
            </ul>
          </nav>

          <div className={styles.reg_area}>
            {sessionStorage.getItem("username") ? (
              <Link>
                <button
                  onClick={() => {
                    sessionStorage.clear();
                    window.location = "/";
                  }}
                  className={styles.login_btn}
                >
                  Logout{" "}
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  onClick={() => (window.location = "/login")}
                  className={styles.login_btn}
                >
                  Login{" "}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
