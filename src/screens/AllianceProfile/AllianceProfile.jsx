import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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

export default function AllianceProfile(props) {
  // const [perks, setPerks] = useState([]);

  //make api call to get perks associated with Alliance ID
  const { handleJoin } = props;
  const params = useParams();
  const [alliance, setAlliance] = useState();
  useEffect(() => {
    const fetchAlliance = async () => {
      const resp = await getAlliance(params.id);
      setAlliance(resp);
    };
    fetchAlliance();
  }, [params.id]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {alliance ? (
        <span className={classes.name}>
          <h2>{alliance.name}</h2>
          <p>Location: {alliance.location}</p>
          <p>{alliance.slogan}</p>
          <p>{alliance.description}</p>

          <Link className={classes.linkButton} to="/alliances">
            <MainButtonSmall onClick={() => handleJoin(alliance.id)}>
              Join this Alliance
            </MainButtonSmall>
          </Link>
          <div>{alliance.businesses}</div>
        </span>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
