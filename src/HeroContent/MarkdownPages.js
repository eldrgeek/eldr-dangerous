import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Markdown from "../Blog/Markdown";

import text from "./text.md";
const options = {
  overrides: {
    h1: {
      component: props => (
        <Typography gutterBottom align="center" variant="h3" {...props} />
      )
    },
    h2: {
      component: props => (
        <Typography gutterBottom align="center" variant="h5" {...props} />
      )
    },
    h3a: {
      component: props => <Typography gutterBottom variant="h6" {...props} />
    },
    h4a: {
      component: props => (
        <Typography gutterBottom variant="caption" paragraph {...props} />
      )
    },
    p: {
      component: props => (
        <Typography variant="paragraph" paragraph {...props} />
      )
    },
    a: { component: Link }
  }
};

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },

  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const posts = [text];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {posts.map(post => (
        <Markdown
          className={classes.markdown}
          key={post.substring(0, 40)}
          options={options}
        >
          {post}
        </Markdown>
      ))}
    </React.Fragment>
  );
}
