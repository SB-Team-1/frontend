import { withStyles, Button } from "@material-ui/core";

const MainButtonSmall = withStyles({
  root: {
    background: '#822840',
    marginTop: "2px",
    marginBottom: "3px",
    // marginLeft: "auto",
    // marginRight: "auto",
    borderRadius: '100vh',
    color: '#F5F4F6',
    fontSize: ".6rem",
    height: 25,
    padding: '0 17px',
    "&:hover": {
      backgroundColor: "#5B1C2C",
      color: "#F5F4F6",
    },
  }

})(Button);

export default MainButtonSmall
