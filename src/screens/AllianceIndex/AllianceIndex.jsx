import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: { paddingTop: "10vh", paddingBottom: "25vh" },
}));

export default function AllianceIndex({ alliances }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {alliances.map((alliance) => (
        <div>{alliance.name}</div>
      ))}
    </div>
  );
}
