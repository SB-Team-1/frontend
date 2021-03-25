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

export default function BusinessIndexCards(props) {
  const { business } = props;
  const classes = useStyles();
  return (
    <Card key={business.id} className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" className={classes.name}>
          {business.name}
        </Typography>
        <Typography variant="body2" component="p">
          {business.category}
        </Typography>
        <Typography variant="body2" component="p">
          {business.description}
        </Typography>
      </CardContent>
        <Link
          to={`/businesses/${business.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MainButtonSmall>
            Learn More
          </MainButtonSmall>
        </Link>
    </Card>
  );
}
