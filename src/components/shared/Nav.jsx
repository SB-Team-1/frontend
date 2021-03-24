import { AppBar, Button } from "@material-ui/core";
import React from "react";
import Logo from "./Logo";

export default function Nav({ currentUser, handleLogout }) {
  return (
    <AppBar>
      <Logo />
      {currentUser ? (
        <>
          <div>Hi! {currentUser.firstname}</div>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : null}
    </AppBar>
  );
}
