import React from "react";
// import logo from "../../assets/logo.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <h2>sunnyside</h2>
      </div>
      <div className="footer__nav">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="footer__icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </div>
  );
};

export default Footer;
