import { React, Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { getBusiness } from "../../services/businesses";
import MainButtonSmall from "../../components/Buttons/MainButtonSmall";
import { getAlliance } from "../../services/alliances";

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
  const [alliance, setAlliance] = useState();

  useEffect(() => {
    const fetchBusiness = async () => {
      const resp = await getBusiness(params.id);
      setBusiness(resp);
    };
    fetchBusiness();
  }, [params.id]);

  useEffect(() => {
    const fetchAlliance = async () => {
      const resp = await getAlliance(business.alliance_id);
      setAlliance(resp);
    };
    if (business) {
      if (business.alliance_id) {
        fetchAlliance();
      }
    }
  }, [business]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {business ? (
        <span className={classes.name}>
          <h2>{business.name}</h2>
          <p>{business.website}</p>
          {alliance ? <p>Our Alliance: {alliance.name}</p> : ""}
          <p>About us: {business.description}</p>
          {currentUser.id === business.user_id ? (
            <>
              <Link className={classes.linkButton} to="/alliances">
                <MainButtonSmall>Join an Alliance</MainButtonSmall>
              </Link>
              <Link className={classes.linkButton} to="/alliances/create">
                <MainButtonSmall>Create an Alliance</MainButtonSmall>
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
