import React from "react";
import {Link} from 'react-scroll'

const Footer = () => (
  <div className="footer">
    <p><Link  to="about" spy={true} smooth={true}>About Us</Link></p>
  </div>
);

export default Footer;