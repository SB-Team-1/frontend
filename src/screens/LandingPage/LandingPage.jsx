import { makeStyles } from "@material-ui/core";
import React from "react";
import LandingStock from "../../components/shared/LandingStock.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "7vh",
  },
  title: {
    paddingTop: "2vh",
    fontSize: "2rem"
  },
  slogan: {
    paddingTop: "2vh",
    color: "#557061"
  },
  description: {
    paddingTop: "1vh",
    margin: "auto",
    maxWidth: "500px"
  },
  bold: {
    paddingTop: "2vh",
    fontWeight: "bold"
  },
  container: {
    paddingTop: "3vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  circle: {
    width: "75px",
    height: "75px",
    lineHeight: "75px",
    borderRadius: "100vh",
    fontSize: "2rem",
    color: "#000",
    textAlign: "center",
    background: "#F5B971",
    marginLeft: "auto",
    marginRight: "auto"
  },
  centered: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "200px"
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LandingStock />
      <div className={classes.title}>Main Street Alliance</div>
      <div className={classes.slogan}>"Main Street is the heart of a community"</div>
      <p className={classes.description}>At MainStreet we’ve built a community of small, independent businesses forming “Strategic Alliances” between them in order to offer their products and services to a wider customer base. </p>
      <p className={classes.bold}> How it works:</p>
      <div className={classes.container}>
        <div className={classes.circle}>1</div>
        <div className={classes.circle}>2</div>
        <div className={classes.circle}>3</div>
      </div>
      <div className={classes.container}>
        <div className={classes.centered}>Sign up above as a user and create a business, if you manage one</div>
        <div className={classes.centered}>Select an Alliance to become a member of or to subscribe to</div>
        <div className={classes.centered}>Enjoy the rewards of supporting your local businesses</div>
      </div>
    </div>
  );
}
