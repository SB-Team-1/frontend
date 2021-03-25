import { withStyles, Button } from "@material-ui/core";

const SecondaryButtonSmall = withStyles({
  root: {
    background: '#FFF',
    borderRadius: '100vh',
    border:"1px solid #822840",
    color: '#822840',
    fontSize: ".6rem",
    height: 25,
    padding: '0 17px',
    "&:hover": {
      backgroundColor: "#ABAAAC",
      color: "#822840",
    },
  }

})(Button);

export default SecondaryButtonSmall
