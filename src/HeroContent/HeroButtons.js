import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Stepper from "../Components/Stepper";
// import CardPages from "../Cards/CardPage";
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 0)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const HeroButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroButtons}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button variant="contained" color="primary">
            Sign up
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Tell a friend
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default HeroButtons;
