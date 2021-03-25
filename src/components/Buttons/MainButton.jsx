import { withStyles, Button } from "@material-ui/core";

const MainButton = withStyles({
  root: {
    background: '#822840',
    margin: "2px 3px",
    borderRadius: '100vh',
    color: '#F5F4F6',
    fontSize: "1rem",
    height: 40,
    padding: '0 17px',
    "&:hover": {
      backgroundColor: "#5B1C2C",
      color: "#F5F4F6",
    },
  }

})(Button);

export default MainButton
