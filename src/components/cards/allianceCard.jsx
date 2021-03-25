import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import MainButtonSmall from "../Buttons/MainButtonSmall"
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "400px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "40px"
  },
  name: {
    fontWeight: "bold"
  }
}));

export default function AllianceCard({ alliance }) {
  const classes = useStyles();
  return (
    <Card key={alliance.id} className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" className={classes.name}>
          {alliance.name}
        </Typography>
        <Typography variant="body2" component="p">
          {alliance.location}
        </Typography>
        <Typography variant="body2" component="p">
          {alliance.description}
        </Typography>
      </CardContent>
        <Link
          to={`/alliance/${alliance.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MainButtonSmall size="small" color="primary">
            Explore Alliance
          </MainButtonSmall>
        </Link>
    </Card>
  );
}
