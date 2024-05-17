import React from "react";
import "./Footer.scss";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__heading">
      <h2>sunnyside</h2>
      </div>
      <div>
        <ul className="footer__nav">
         <li className="footer__nav--list">About</li>
         <li className="footer__nav--list">Services</li>
         <li className="footer__nav--list">Contact</li>
        </ul>
      </div>
      <div className="footer__icons">
        <div className="footer__icons--list"><FacebookIcon /></div>
        <div className="footer__icons--list"><InstagramIcon /></div>
        <div className="footer__icons--list"><TwitterIcon /></div>
        <div className="footer__icons--list"><PinterestIcon /></div>
      </div>
    </div>
  );
};

export default Footer;
