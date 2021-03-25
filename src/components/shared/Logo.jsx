import React from "react";
import { Link } from "react-router-dom";
import mainlogo from "./images/mainlogo.jpg";

export default function Logo() {
  return (
    <Link to="/">
      <div style={{}}>
        <img
          src={mainlogo}
          alt="sign main street logo"
          style={{ height: "7vh" }}
        />
      </div>
    </Link>
  );
}
