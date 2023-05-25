import { Button, Container, Divider, SvgIcon } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import React from "react";
import Button3D from "../../../../Components/Buttons/Button3D/Button3D";

function FooterHomePage() {
  return (
    <div className='FooterHomePage'>
      <Grid container display='flex' justifyContent='center' spacing={2}>
        <Grid md={2} xs={12}>
          <Grid xs={12} display='flex' justifyContent={"start"} alignItems='center'>
            <PlayCircleIcon />
            <p>Store</p>
          </Grid>
          About Us Starting out as a YouTube channel making Minecraft Adventure Maps,
        </Grid>

        <Grid md={2} xs={12}>
          <Grid xs={12} display='flex' justifyContent={"start"} alignItems='center'>
            <ShoppingCartIcon />
            <p>Store</p>
          </Grid>
          Hypixel is now one of the largest and highest quality Minecraft Server Networks in the
          world, featuring original games such as The Walls, Mega Walls, Blitz Survival Games, and
          many more!
        </Grid>
        <Grid md={2} xs={12}>
          <Grid xs={12} display='flex' justifyContent={"start"} alignItems='center'>
            <FacebookIcon />
            <p>Store</p>
          </Grid>
          About Us Starting out as a YouTube channel making Minecraft Adventure Maps,
        </Grid>
        <Grid md={2} xs={12}>
          <Grid xs={12} display='flex' justifyContent={"start"} alignItems='center'>
            <ShoppingCartIcon />
            <p>Store</p>
          </Grid>
          Hypixel is now one of the largest and highest quality Minecraft Server Networks in the
          world, featuring original games such as The Walls, Mega Walls, Blitz Survival Games, and
          many more!
        </Grid>
      </Grid>

      <div className='AllRights'>
        <h5>© 2023 Hypixel Inc. All Rights Reserved.</h5>
      </div>
    </div>
  );
}

export default FooterHomePage;
