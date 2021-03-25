import React from "react";
import { Link } from "react-router-dom";
import landingstock from "./images/landingstock.jpeg";

export default function LandingStock() {
  return (
    <Link to="/">
      <div style={{}}>
        <img
          src={landingstock}
          alt="local market"
          style={{
            paddingTop: "7vh",
            height: "35vh",
            width: "120%",
            objectFit: "cover"
          }}
        />
      </div>
    </Link>
  );
}
