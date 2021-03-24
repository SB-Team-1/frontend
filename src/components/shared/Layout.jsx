import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ currentUser, children, handleLogout }) {
  return (
    <>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {children}
      <Footer />
    </>
  );
}
