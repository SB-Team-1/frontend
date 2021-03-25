import { makeStyles } from "@material-ui/core";
import React from "react";
import AllianceCard from "../../components/cards/allianceCard";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10vh",
    paddingBottom: "25vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start" }
}));

export default function AllianceIndex({ alliances }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {alliances.map((alliance) => (
        <AllianceCard key={alliance.id} alliance={alliance} />
      ))}
    </div>
  );
}
