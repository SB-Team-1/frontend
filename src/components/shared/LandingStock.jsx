import React from "react";
import landingstock from "./images/landingstock.jpeg";

export default function LandingStock() {
  return (
      <div>
        <img
          src={landingstock}
          alt="local market"
          style={{
            height: "35vh",
            width: "100vw",
            objectFit: "cover"
          }}
        />
      </div>
  );
}
