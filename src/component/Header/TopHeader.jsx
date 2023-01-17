import React from "react";
import "../../styles/top-header.css";
import { faceBook, linkedln, twitter } from "../svgs/Home";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-wrapper">
        <div className="link-icons">
          <div>{faceBook}</div>
          <div>{twitter}</div>
          <div>{linkedln}</div>
        </div>
        <div className="contact-details">
          <p>+234 810 997 0175</p>
          <a href="mailto:realshegz@gmail.com">segun.abiodun@phasecurve.com</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
