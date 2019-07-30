import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Stepper from "../Components/Stepper";
import HeroButtons from "./HeroButtons";
// import CardPages from "../Cards/CardPage";
const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 0)
  }
}));

const Template = () => {
  const classes = useStyles();
  return <React.Fragment>Template!</React.Fragment>;
};
export default Template;
