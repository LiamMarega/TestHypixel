import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import imageAd from "../../../../assets/images/upgrade-account-cta.png";
import { Box, Container } from "@mui/material";
import SocialMedia from "../../../../Components/Buttons/SocialMedia/SocialMedia";

const threads = [
  {
    title: "Inventory gone",
    autor: "_dub__",
    date: "45 minutes ago",
  },
  {
    title: "Inventory gone",
    autor: "_dub__",
    date: "45 minutes ago",
  },
  {
    title: "Inventory gone",
    autor: "_dub__",
    date: "45 minutes ago",
  },
  {
    title: "Inventory gone",
    autor: "_dub__",
    date: "45 minutes ago",
  },
  {
    title: "Inventory gone",
    autor: "_dub__",
    date: "45 minutes ago",
  },
];

function OutsideHomePage() {
  return (
    <div className='OutsideHomePage'>
      <Grid container>
        <Grid xs={12}>
          <Box className='upgradeAccountCta'>
            <div class='upgradeAccountCta-body'>
              <h3>Upgrade your Account!</h3>
              <h4>Ranks, Mystery Boxes and Boosters</h4>
            </div>
          </Box>
        </Grid>
        <Grid xs={12}>
          <SocialMedia />
        </Grid>
        <Container className='RecentThreads  mt5'>
          <h3>Recent Threads</h3>

          {threads.map((data) => (
            <Grid xs={12} className='pointer underline containerThreads '>
              <Grid xs={12}>
                <h5>{data.title}</h5>
              </Grid>
              <Grid xs={12}>
                <p>
                  {data.autor}, {data.date}
                </p>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Grid>
    </div>
  );
}

export default OutsideHomePage;
