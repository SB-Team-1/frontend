import React from "react";
import { Link } from "react-router-dom";
import mainlogo from './images/mainlogo.jpg';

export default function Logo() {
  return (
    <Link to="/">
      <div style={{ width: '500px'}}>
        <img src={mainlogo} alt="sign main street logo" />
      </div>
    </Link>
  );
}
