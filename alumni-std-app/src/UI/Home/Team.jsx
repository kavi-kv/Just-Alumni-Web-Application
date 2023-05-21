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
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import data from './Team.json'
import React, { useState } from "react";

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
    <Container sx={{ m: 4 }}>
        {
            props.data.team.map((value) => {
                return(
                    <>
                    <Card sx={{ width: 300 }}>
                        <CardHeader
                        sx={{ mb: 1 }}
                        avatar={<Avatar src={value.profile_img} />}
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
                        <CardMedia
                        sx={{ p: 1, borderRadius: 4 }}
                        component={"img"}
                        image="../../logo.jpg"
                        height={140}
                        width={140}
                        />

                        <CardContent>
                        <Typography>
                            {value.details}
                        </Typography>
                        </CardContent>
                        <Divider />
                        <CardActions sx={{ display: "flex", flexWrap: "wrap" }}>
                        {value.skills.map((skill)=> {
                            return(
                                <Chip sx={{ mb: 2 }} label={skill} variant="filled" size="medium" key={skill} />
                            )
                        })}
                        </CardActions>
            </Card>
                    </>
                )
            })
        }
      

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
  );
}