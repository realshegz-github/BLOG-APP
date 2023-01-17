import React from "react";
// import axets from "../../assets/images/axets.png";
import phasecurve from "../../assets/images/Main_Logo.png";
import "../../styles/ads-banner.css";
const AdsBanner = () => {
  return (
    <div className="ads-banner">
      <div className="ads-wrapper">
        <div className="axets-logo">
          <img src={phasecurve} alt="Logo" />
        </div>
        <div className="ads-content">
          <p>PLACE YOUR ADS</p>
        </div>
      </div>
    </div>
  );
};

export default AdsBanner;
