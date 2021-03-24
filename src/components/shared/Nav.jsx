import { AppBar, makeStyles, MenuItem } from "@material-ui/core";
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
  menuItems: {
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

  const LoggedOutOptions = (
    <>
      <Link to="/alliances" className={classes.link}>
        <MenuItem>Alliances</MenuItem>
      </Link>
      <Link to="/businesses" className={classes.link}>
        <MenuItem>Local Businesses</MenuItem>
      </Link>
      <Link className={classes.link} to="/sign-in">
        <MenuItem>Sign In</MenuItem>
      </Link>
      <Link className={classes.link} to="/sign-up">
        <MenuItem>Sign Up</MenuItem>
      </Link>
    </>
  );

  const LoggedInOptions = (
    <>
      <Link to="/alliances" className={classes.link}>
        <MenuItem>Alliances</MenuItem>
      </Link>
      <Link to="/businesses" className={classes.link}>
        <MenuItem>Local Businesses</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </>
  );

  return (
    <AppBar className={classes.appBar}>
      <Logo />
      {currentUser ? (
        <>
          <div>Hi {currentUser.email}!</div>
        </>
      ) : null}
      <div className={classes.menuItems}>
        {currentUser ? LoggedInOptions : LoggedOutOptions}
      </div>
    </AppBar>
  );
}
