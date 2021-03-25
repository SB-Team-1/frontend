import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BusinessIndexCards from "../../components/cards/businessCards";

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: "10vh", paddingBottom: "25vh" },
  layout: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "15px"
  }
}));

export default function BusinessIndex({ businesses, userBusinesses }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {userBusinesses.length ? (
        <>
          <Typography className={classes.title}>Your Businesses</Typography>
          <div  className={classes.layout}>
            {userBusinesses.map((business) => (
              <BusinessIndexCards key={business.id} business={business}/>
            ))}
          </div>
        </>
      ) : null}
      {
        <>
          <Typography className={classes.title}>All Businesses</Typography>
          <div  className={classes.layout}>
            {businesses.map((business) => (
              <BusinessIndexCards key={business.id} business={business} />
            ))}
          </div>
        </>
      }
    </div>
  );
}
