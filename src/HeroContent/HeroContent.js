import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Stepper from "../Components/Stepper";
import HeroButtons from "./HeroButtons";
import Subtext from "./Subtext";
import MarkdownPages from "./MarkdownPages";
import DemoSurvey from "../Surveys/DemoSurvey";
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

const HeroContent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            // gutterBottom
          >
            Dangerous Devices
            <DemoSurvey />
          </Typography>
          {/* <Subtext title="This is the title" subtext="this is the subtext" /> */}
          {/* <MarkdownPages /> */}
          <HeroButtons />
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            <Stepper />.
          </Typography>
        </Container>
      </div>
      {/* <CardPages /> */}
      <HeroButtons />
    </React.Fragment>
  );
};
export default HeroContent;
