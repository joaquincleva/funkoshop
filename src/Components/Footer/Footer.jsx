import React from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../../assets/isotype.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "15vh",
        backgroundColor: "#30343F",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <NavLink to={"/shop"} title="See the products">
          <p style={{ color: "white", margin: "0px" }}>Shop</p>
        </NavLink>
        <NavLink to={`/`} title="About me">
          <p style={{ color: "white", margin: "0px" }}>About me</p>
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
