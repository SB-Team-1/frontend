import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function AllianceCard({ alliance }) {
  const classes = useStyles();
  return (
    <Card key={alliance.id} className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {alliance.name}
        </Typography>
        <Typography variant="body2" component="p">
          {alliance.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/alliance/${alliance.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
