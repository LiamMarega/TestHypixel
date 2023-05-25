import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Button3D from "../../Buttons/Button3D/Button3D";
import "./styles.scss";

function CardNews({ title, text, date, image }) {
  return (
    <Container className='CardNews card card__content'>
      <Grid container>
        <Grid xs={9}>
          <h3 className='pointer underline'>{title}</h3>
        </Grid>
        <Grid xs={3} display='flex' justifyContent='end'>
          <h3>{date}</h3>
        </Grid>
      </Grid>
      <img src={image} alt='image new' width={"100%"} />
      <Container>
        <p>{text}</p>
      </Container>
      <Grid xs={12} paddingBottom={3} display='flex' justifyContent='end'>
        <Button3D text='Learn more' />
      </Grid>
    </Container>
  );
}

export default CardNews;
