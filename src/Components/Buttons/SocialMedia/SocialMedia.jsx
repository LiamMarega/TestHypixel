import React from "react";
import "./styles.scss";
import instagramLogo from "../../../assets/images/instagram.svg";
import twitterLogo from "../../../assets/images/twitter.svg";
import discordLogo from "../../../assets/images/discord.svg";
import whatsAppLogo from "../../../assets/images/whatsapp.svg";

function SocialMedia() {
  return (
    <div className='SocialMedia'>
      <div className='card'>
        <a className='social-link1'>
          <img src={instagramLogo} alt='' />
        </a>
        <a className='social-link2'>
          <img src={twitterLogo} alt='' />
        </a>
        <a className='social-link3'>
          <img src={discordLogo} alt='' />
        </a>
        <a className='social-link4'>
          <img src={whatsAppLogo} alt='' />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
