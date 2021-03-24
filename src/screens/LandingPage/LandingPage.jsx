import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    flexFlow: "align aljksdhfjkhsaf",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return <div className={classes.button}></div>;
}
