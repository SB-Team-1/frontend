import { makeStyles } from "@material-ui/core";
import React from "react";
import LandingStock from "../../components/shared/LandingStock.jsx";

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: "7vh" },
  pic: {},
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LandingStock />
      <div>Hello</div>
    </div>
  );
}
