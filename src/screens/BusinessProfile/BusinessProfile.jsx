import { React, Fragment, useState, useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { getBusiness } from "../../services/businesses";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10vh",
  },
  name: {
    fontHeight: "4rem",
    fontWeight: "bold",
  },
  linkButton: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
}));

export default function BusinessProfile({ businesses, currentUser }) {
  const params = useParams();
  const [business, setBusiness] = useState();
  useEffect(() => {
    const fetchBusiness = async () => {
      const resp = await getBusiness(params.id);
      setBusiness(resp);
    };
    fetchBusiness();
  }, []);

  const classes = useStyles();

  console.log(business);

  return (
    <div className={classes.root}>
      {business ? (
        <span className={classes.name}>
          <h2>{business.name}</h2>
          <p>{business.website}</p>
          <p>Our Alliance: {business.alliance}</p>
          <p>About us: {business.description}</p>
          {currentUser.id === business.user_id ? (
            <>
              <Link className={classes.linkButton} to="/alliances">
                <Button>Join an Alliance</Button>
              </Link>
              <Link className={classes.linkButton} to="/alliances/create">
                <Button>Create an Alliance</Button>
              </Link>
            </>
          ) : null}
        </span>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
