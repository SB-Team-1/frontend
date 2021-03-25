import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingTop: "10vh",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/sign-up">Sign Up as User</Link>
      {/* <Link to="/businesses/create">Sign Up as Business</Link> */}
    </div>
  );
}
