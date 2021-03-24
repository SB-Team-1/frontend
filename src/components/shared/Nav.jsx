import { AppBar, Button, makeStyles, MenuItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: "7vh",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.primary.contrastText,
  },
  actionItems: {
    display: "flex",
    flexFlow: "row wrap",
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  },
}));

export default function Nav({ currentUser, handleLogout }) {
  const classes = useStyles();

  const menuOptions = <></>;

  return (
    <AppBar className={classes.appBar}>
      <Logo />
      {currentUser ? (
        <>
          <div>Hi! {currentUser.firstname}</div>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : null}
      <div className={classes.actionItems}>
        <Link to="/alliances" className={classes.link}>
          <MenuItem>Alliances</MenuItem>
        </Link>
        <Link to="/businesses" className={classes.link}>
          <MenuItem>Local Businesses</MenuItem>
        </Link>
      </div>
    </AppBar>
  );
}
