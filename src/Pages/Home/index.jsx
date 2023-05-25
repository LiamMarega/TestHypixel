import { Container } from "@mui/material";
import React from "react";

import BassicAppBar from "../../Components/Elements/BasicAppBar/BasicAppBar";
import HeaderHomePage from "./Parts/header";
import ForumHomePage from "./Parts/Forum";
import FooterHomePage from "./Parts/Footer";

function HomePage() {
  return (
    <div className='HomePage'>
      <BassicAppBar />
      <HeaderHomePage />
      <ForumHomePage />
      <FooterHomePage />
    </div>
  );
}

export default HomePage;
