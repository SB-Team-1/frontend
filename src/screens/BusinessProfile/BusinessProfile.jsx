import { React, Fragment, useState, useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getBusiness } from "../../services/businesses";

const useStyles = makeStyles((theme) => ({
  name: {
    fontHeight: "4rem",
    fontWeight: "bold",
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
    <Fragment>
      {business ? (
        <span className={classes.name}>
          <h2>{business.name}</h2>
          <p>{business.website}</p>
          <p>Our Alliance: {business.alliance}</p>
          <p>About us: {business.description}</p>
          {currentUser.id === business.user_id ? (
            <>
              <Button>Join an Alliance</Button>
              <Button>Create an Alliance</Button>
            </>
          ) : null}
        </span>
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
}
