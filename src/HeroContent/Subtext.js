import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// import CardPages from "../Cards/CardPage";
const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 0)
  }
}));

const Subtext = props => {
  //}= { title: "Title here", subtext: "This is the subtext" }) => {
  // So it renders when unit testing
  props =
    Object.keys(props).length !== 0
      ? props
      : { title: "Default title here", subtext: "Default subtext" };
  const classes = useStyles();
  return (
    <React.Fragment>
      {" "}
      <Typography
        component="h6"
        variant="h6"
        align="left"
        color="textPrimary"
        // gutterBottom
      >
        {props.title}
      </Typography>
      {props.subtext && (
        <Typography
          component="h7"
          variant="h7"
          align="left"
          color="textPrimary"
          // gutterBottom
        >
          {props.subtext}
        </Typography>
      )}
    </React.Fragment>
  );
};
export default Subtext;
