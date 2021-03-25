import { withStyles, Button } from "@material-ui/core";

const SecondaryButtonSmall = withStyles({
  root: {
    background: '#FFF',
    margin: "2px 3px",
    borderRadius: '100vh',
    border:"1px solid #822840",
    color: '#822840',
    fontSize: "1rem",
    height: 40,
    padding: '0 17px',
    "&:hover": {
      backgroundColor: "#ABAAAC",
      color: "#822840",
    },
  }

})(Button);

export default SecondaryButtonSmall
