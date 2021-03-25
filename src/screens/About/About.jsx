import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import coffeedude from "./images/Rectangle44.jpg";
import cognacsign from "./images/Rectangle45.jpg";
import opensign from "./images/Rectangle34.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10vh",
    paddingBottom: "30vh",
    margin: "0 auto",
    width: "90vw",
  },
  blurbContainer: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: { maxWidth: "20%" },
  blurb: {
    width: "66%",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">About MainStreet Alliance</Typography>
      <Typography variany="h5">
        <em>"Main Street is the heart of a community"</em>
      </Typography>
      <div className={classes.blurbContainer}>
        <img src={coffeedude} alt="coffee dude" className={classes.image} />
        <Typography className={classes.blurb}>
          At MainStreet, we’ve built a community of small independent businesses
          by creating “Strategic Alliances” between businesses in order to offer
          their products and services to a wider customer base. We focus on
          automating the journey for our member-businesses and customers through
          simplified e-commerce tools. Our goal is to increase visibility for
          small businesses by strengthening their bond with their communities.
        </Typography>
      </div>
      <div className={classes.blurbContainer}>
        <Typography className={classes.blurb}>
          We provide a platform for small businesses to grow their sales and
          scale their product, while offering our customers exclusive access to
          promotions and deals. Our focus is driving customer subscription
          frequency and retention. We create synergies between our
          member-businesses and customers as they know that the subscriptions
          directly support their favorite local small businesses.
        </Typography>
        <img src={cognacsign} alt="cognac sign" className={classes.image} />
      </div>
      <div className={classes.blurbContainer}>
        <img src={opensign} alt="open sign" className={classes.image} />
        <Typography className={classes.blurb}>
          We have a team of data scientists who are all about making data-driven
          decisions and providing tailored insights on foot traffic and
          promotions to businesses. We built complex models to identify what
          components are most impactful in driving the revenue and customer
          retention. Our algorithms have proven that modernized marketplaces
          like our platform not only work, but are successful. At MainStreet,
          the small business community is our priority!
        </Typography>
      </div>
    </div>
  );
}
