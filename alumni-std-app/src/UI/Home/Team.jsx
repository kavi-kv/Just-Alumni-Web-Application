import { Details, More, MoreOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import data from './Team.json'
import React, { useState } from "react";
import styles from './team.module.css'

export default function Dev(props) {
  const [anchor, setAnchor] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const open = Boolean(anchor);
  const handleClcik = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchor(null);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
       <Container sx={{ m: 0 ,display: "grid",justifyContent: "center",alignItems: "center",height: "100vh",backgroundColor: "blue"  }}>
      <div className={styles.team_header_container}>
        <h2 className={styles.team_header}>About The Developers.</h2>
        <p className={styles.team_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit alias voluptate magnam a est expedita odio, omnis quis optio tempora fugiat eveniet laudantium, rerum ab atque sapiente quibusdam nam.</p>
      </div>
      <Grid container direction="row" spacing={1}>
        {props.data.team.map((value) => {
          return (
            <Grid item key={value.id}>
              <Card sx={{ width: 300,  }}>
                <CardHeader
                  sx={{ mb: 1 }}
                  avatar={<Avatar src={value.profile_img} sx={{ width: 80, height: 80 }} />}
                  title={value.FullName}
                  subheader={value.Professional}
                  action={
                    <IconButton
                      id="menu-button"
                      aria-controls={open ? "menu-profile" : undefined}
                      aria-expanded={open ? "menu-profile" : undefined}
                      aria-haspopup={true}
                      onClick={handleClcik}
                    >
                      <MoreOutlined />
                    </IconButton>
                  }
                />
                <Divider />
                {/* <CardMedia
                        sx={{ p: 1, borderRadius: 4 }}
                        component={"img"}
                        image="../../logo.jpg"
                        height={140}
                        width={140}
                        /> */}

                <CardContent>
                  <Typography>{value.details}</Typography>
                </CardContent>
                <Divider />
                <CardActions sx={{ display: "flex", flexWrap: "wrap" }}>
                  {value.skills.map((skill) => {
                    return <Chip sx={{ mb: 2 }} label={skill} variant="filled" size="medium" key={skill} />;
                  })}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      

      <Menu
        onClose={handleClose}
        anchorEl={anchor}
        open={open}
        id="menu-profile"
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <MenuItem>Profile</MenuItem>
      </Menu>

      {/* <Drawer onClose={drawer} open={drawer} anchor="left">
        <Box sx={{ p: 3 }}>
          <span>My Profile</span>
          <h3>Profile memo letter</h3>
          <Button onClick={() => setDrawer(!drawer)}>Close</Button>
        </Box>
      </Drawer> */}
    </Container>
    </div>
   
  );
}
