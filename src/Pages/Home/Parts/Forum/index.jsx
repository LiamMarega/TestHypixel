import { Container } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardNews from "../../../../Components/Elements/CardNews/CardNews";
import imageNews from "../../../../assets/images/sb-18-4.png";
import imageNews2 from "../../../../assets/images/game-update.png";

import OutsideHomePage from "../Outside";
import { Pagination } from "@mui/material";

const publications = [
  {
    title: "SkyBlock Patch 0.18.4 - Sack Additions & Bug Fixes",
    text: "Howdy gamers! SkyBlock is back at it again with a round of bug fixes and small QoL changes, including several new Sack Items. Read more below for the full list of changes!",
    image: imageNews,
    date: "May 11, 2023",
  },
  {
    title: "SkyBlock Patch 0.18.4 - Sack Additions & Bug Fixes",
    text: "Hello! We are presenting to you a bunch of additions, changes, and fixes for Mega Walls! Read on to find out more.",
    image: imageNews2,
    date: "May 11, 2023",
  },
  {
    title: "SkyBlock Patch 0.18.4 - Sack Additions & Bug Fixes",
    text: "Howdy gamers! SkyBlock is back at it again with a round of bug fixes and small QoL changes, including several new Sack Items. Read more below for the full list of changes!",
    image: imageNews,
    date: "May 11, 2023",
  },
  {
    title: "SkyBlock Patch 0.18.4 - Sack Additions & Bug Fixes",
    text: "Hello! We are presenting to you a bunch of additions, changes, and fixes for Mega Walls! Read on to find out more.",
    image: imageNews2,
    date: "May 11, 2023",
  },
  {
    title: "SkyBlock Patch 0.18.4 - Sack Additions & Bug Fixes",
    text: "Howdy gamers! SkyBlock is back at it again with a round of bug fixes and small QoL changes, including several new Sack Items. Read more below for the full list of changes!",
    image: imageNews,
    date: "May 11, 2023",
  },
];

function ForumHomePage() {
  return (
    <>
      <div class='p-body-before'></div>
      <Container className='ForumHomePage'>
        <Grid container spacing={3} paddingX={7}>
          <Pagination count={10} shape='rounded' />
          <Grid md={9}>
            {publications.map((data, idx) => (
              <CardNews
                date={data.date}
                image={data.image}
                text={data.text}
                title={data.title}
                key={idx}
              />
            ))}
          </Grid>
          <Grid md={3}>
            <OutsideHomePage />
          </Grid>
        </Grid>
        <div class='p-body-after'></div>
      </Container>
    </>
  );
}

export default ForumHomePage;
