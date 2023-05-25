import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Logo from "../../../../assets/images/logo.png";
import React from "react";
import DeluxeButton from "../../../../Components/Buttons/DeluxeButton/DeluxeButton";

function HeaderHomePage() {
  return (
    <div>
      <Grid2 container className='HeaderHomerPage' paddingX={5}>
        <Grid2 md={9} xs={5} paddingLeft={10}>
          <img src={Logo} width='10%' />
        </Grid2>
        <Grid2 md={3} xs={5} display='flex' justifyContent='center'>
          <DeluxeButton text='PLAY NOW' />
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 md={11} xs={12} display='flex' justifyContent={"end"} alignItems='start'>
          <h4>
            SERVER IP » <b style={{ color: "#AA32FC" }}> MC.MINECRAFT.NET</b>
          </h4>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default HeaderHomePage;
