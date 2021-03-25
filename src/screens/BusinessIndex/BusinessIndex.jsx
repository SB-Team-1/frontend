import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BusinessIndexCards from "../../components/cards/businessCards";

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: "10vh", paddingBottom: "25vh" },
}));

export default function BusinessIndex({ businesses, userBusinesses }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {userBusinesses ? (
        <>
          <Typography>Your Businesses</Typography>
          {userBusinesses.map((business) => (
            <BusinessIndexCards key={business.id} business={business} />
          ))}
        </>
      ) : null}
      {
        <>
          <Typography>All Businesses</Typography>
          {businesses.map((business) => (
            <BusinessIndexCards key={business.id} business={business} />
          ))}
        </>
      }
    </div>
  );
}
