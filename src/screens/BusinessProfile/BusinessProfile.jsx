import { React, Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getBusiness } from "../../services/businesses";

const useStyles = makeStyles((theme) => ({
  name: {
    fontHeight: "4rem",
    fontWeight: "bold",
  },
}));

export default function BusinessProfile({ businesses }) {
  const params = useParams();
  const [business, setBusiness] = useState();
  useEffect(() => {
    const fetchBusiness = async () => {
      const resp = await getBusiness(params.id);
      setBusiness(resp);
    };
    fetchBusiness();
  }, [params.id]);

  const classes = useStyles();

  return (
    <Fragment>
      {business ? (
        <span className={classes.name}>
          <h2>{business.name}</h2>
          <p>{business.website}</p>
          {business.alliance ? <p>Our Alliance: {business.alliance}</p> : ''}
          <p>About us: {business.description}</p>
        </span>
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
}
