import {
  Button,
  Container,
  Paper,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import DataTables from "datatables.net-dt";
import UnpublishedIcon from "@mui/icons-material/Unpublished";

import Header from "../components/Header";
import Layout from "../../Layout";
import SideBar from "../components/sidebar";

export default function Jobs() {
  useEffect(() => {
    var data = new DataTables("#alumniLists");
  }, []);
  return (
    <Grid container>
      <SideBar />
      <Grid item lg={10}>
        <Header />
        <Container>
          <Paper
            sx={{
              p: 2,
              my: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">
              View And Manage Alumni List Graduates
            </Typography>
            <div>
              <Button
                variant="outlined"
                color="error"
                startIcon={<VerifiedIcon />}
              >
                Verify All
              </Button>
            </div>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <table
              id="alumniLists"
              className="display mt-2 table table-bordered"
            >
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<UnpublishedIcon />}
                    >
                      UnVerfied
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<VerifiedIcon />}
                    >
                      Verfied
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
