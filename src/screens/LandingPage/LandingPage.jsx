import { makeStyles } from "@material-ui/core";
import React from "react";
import LandingStock from "../../components/shared/LandingStock.jsx"

const useStyles = makeStyles((theme) => ({
  pic: {
    display: "flex",
    paddingTop: "7vh",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
      <LandingStock className={classes.pic} />
  );
}
