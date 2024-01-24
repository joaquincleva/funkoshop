import React from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../../assets/isotype.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="linksFooter">
        <NavLink to={"/shop"} title="See the products">
          <p className="linkFooter">Shop</p>
        </NavLink>
        <NavLink to={`/`} title="About me">
          <p className="linkFooter">About me</p>
        </NavLink>
      </div>
      <div>All rights reserved 2024 - Joaquin Cleva &copy;</div>
      <div>
        <NavLink to={`/`} title="Go to homepage">
          <img style={{ width: "50%" }} src={brandLogo} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
