import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#046582",
    color: "white",
    height: "11vh",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0,
    width: "100vw",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        <Typography>Company</Typography>
        <Link to="/about">
          <Typography>About MainStreet</Typography>
        </Link>
      </div>

      <div>
        <Typography>Join the Community</Typography>
        <Link to="/alliances">
          <Typography>Search for or create an Alliance</Typography>
        </Link>
      </div>

      <div>
        <Typography>More</Typography>
        <Link to="/support">
          <Typography>Customer Support</Typography>
        </Link>
        <Link to="/FAQ">
          <Typography>FAQ</Typography>
        </Link>
      </div>

      <div>
        <Typography>Follow Us</Typography>
        <Button>
          <FacebookIcon />
        </Button>
        <Button>
          <InstagramIcon />
        </Button>
      </div>
    </footer>
  );
}
