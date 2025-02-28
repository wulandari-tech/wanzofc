import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/wanzbrayy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://instgram.com/wanz_brayy" target="_blank" rel="noreferrer"><Instagram/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/wanzbrayy" target="_blank" rel="noreferrer">wanzofc</a> with 💜</p>
    </footer>
  );
}

export default Footer;
