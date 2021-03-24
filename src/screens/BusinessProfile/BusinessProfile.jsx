import { React, Fragment } from "react";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  name: {
    fontHeight: '4rem',
    fontWeight: 'bold'
  },
}));

export default function BusinessProfile(business) {
  const classes = useStyles()
  return (
    <Fragment>
      <span className={classes.name}>
        <h2>
          {business.name}
        </h2>
        <p>
         {business.website}
        </p>
        <p>
          About us: {business.description}
        </p>
        <p>
          Our Alliance: {business.alliance}
        </p>

      </span>
    </Fragment>
    )
}
