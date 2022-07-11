import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="footer">
        <FaFacebook className="facebook" />
        <FaTwitter className="twitter" />
      </div>
    );
};

export default Footer;
