import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { Avatar, Container, Divider, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [anchor, setAnchor] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchor);
  return (
    <Container>
      <Menu
      onClose={()=>setAnchor(null)}
        sx={{ mt: 2 }}
        id="menu-settings"
        open={open}
        anchorEl={anchor}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setAnchor(null);
            navigate("/User/profile");
          }}
        >
          <PersonIcon fontSize="small" sx={{ mx: 1 }} />
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            sessionStorage.clear();
            setAnchor(null);
            window.location = "/";
          }}
        >
          <Logout fontSize="small" sx={{ mx: 1 }} />
          Logout
        </MenuItem>
      </Menu>
      <nav className={styles.nav_header}>
        <a>@Alumni.Just</a>
        <div className={styles.nav_right}>
          <ul>
            <li
              id="menu-button"
              aria-controls={open ? "menu-settings" : undefined}
              aria-expanded={open ? "menu-settings" : undefined}
              aria-haspopup={true}
              onClick={(e) => setAnchor(e.currentTarget)}
              className={styles.profile}
            >
              <Avatar sx={{ background: "#8B1874", p: 2 }}>{sessionStorage.getItem("AdminEmail").substring(0,2).toUpperCase()}</Avatar>
            </li>
            {/* <li className={styles.logout}>Logout</li> */}
          </ul>
        </div>
      </nav>
      <Divider sx={{ mt: 2 }} />
    </Container>
  );
};

export default Header;
