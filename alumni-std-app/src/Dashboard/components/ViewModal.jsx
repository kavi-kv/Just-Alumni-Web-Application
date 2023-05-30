import { Close } from '@mui/icons-material';
import { Dialog, DialogTitle ,IconButton,Typography,Box, Divider, DialogContent, Grid} from '@mui/material'
import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SchoolIcon from '@mui/icons-material/School';
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import VerifiedIcon from "@mui/icons-material/Verified";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import TransgenderIcon from "@mui/icons-material/Transgender";
export default function ViewModal(props) {
  return (
    <>
      {props.response && (
        <Dialog open={props.open}>
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">View Graduate Student </Typography>
            <Box>
              <IconButton onClick={() => props.setOpen(false)}>
                <Close color="error" />
              </IconButton>
            </Box>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container spacing={10}>
              <Grid item lg={6}>
                <img
                  src="../../60111.jpg"
                  style={{ width: "240px", height: "250px", borderRadius: 8 }}
                />
              </Grid>
              <Grid item lg={6}>
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    FullName
                    <PersonIcon sx={{ mr: 1, color: "gray" }} />
                  </Typography>
                  <Typography sx={{ mrl: 5 }}>
                    {props.response.response.FullName}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Gender
                    <TransgenderIcon sx={{ mr: 1, color: "gray" }} />
                  </Typography>
                  <Typography sx={{ mrl: 5 }}>
                    {props.response.response.Gender}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />

                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Graduated Batch
                    <SchoolIcon sx={{ mr: 1, color: "gray" }} />
                  </Typography>
                  <Typography sx={{ mrl: 5 }}>
                    {props.response.response.GraduatedBatch}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: 15, fontWeight: "bold" }}
                  >
                    Graduated Year
                  </Typography>
                  <Typography sx={{ mrl: 5 }}>
                    {props.response.response.GraduatedYear}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    UniversityID
                    <Grid3x3Icon sx={{ mr: 1, color: "gray" }} />
                  </Typography>
                  <Typography sx={{ mrl: 5 }}>
                    {props.response.response.UniversityID}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 15,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Account Status
                    <SignalWifiStatusbar4BarIcon
                      sx={{ mr: 1, color: "gray" }}
                    />
                  </Typography>
                  {props.response.response.Verified == "verified" ? (
                    <Typography
                      color={"success"}
                      sx={{ color: "green", fontWeight: "bold" }}
                    >
                      {props.response.response.Verified}
                    </Typography>
                  ) : (
                    <Typography sx={{ color: "red", fontWeight: "bold" }}>
                      {props.response.response.Verified}
                    </Typography>
                  )}
                </Box>
                <Divider sx={{ my: 1 }} />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
