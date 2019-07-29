import React, { Component } from "react";

import PropTypes from "prop-types";

// import { withStyles } from "@material-ui/core/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  signUpButton: {
    marginRight: theme.spacing(1)
  },
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    // ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const Bar = props => {
  const [menu, setMenu] = React.useState({ anchorEl: null });
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  const openMenu = event => {
    const anchorEl = event.currentTarget;
    setMenu({ anchorEl });
  };

  const closeMenu = () => {
    setMenu({ anchorEl: null });
  };

  const handleSettingsClick = () => {
    closeMenu();
    props.onSettingsClick();
  };

  const handleSignOutClick = () => {
    closeMenu();
    props.onSignOutClick();
  };

  // Properties
  const { title, isPerformingAuthAction, isSignedIn, user } = props;

  // Events
  const { onSignUpClick, onSignInClick } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="static">
        <Toolbar variant="regular">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ flexGrow: 1 }} color="inherit" variant="h6">
            {title}
          </Typography>

          {isSignedIn && (
            <React.Fragment>
              <IconButton
                color="inherit"
                disabled={isPerformingAuthAction}
                onClick={openMenu}
              >
                {user.photoURL ? (
                  <Avatar alt="Avatar" src={user.photoURL} />
                ) : (
                  <PersonIcon />
                )}
              </IconButton>

              <Menu
                anchorEl={menu.anchorEl}
                open={Boolean(menu.anchorEl)}
                onClose={closeMenu}
              >
                <MenuItem
                  disabled={isPerformingAuthAction}
                  onClick={handleSettingsClick}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  disabled={isPerformingAuthAction}
                  onClick={handleSignOutClick}
                >
                  Sign out
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}

          {!isSignedIn && (
            <React.Fragment>
              <Button
                className={classes.signUpButton}
                color="secondary"
                disabled={isPerformingAuthAction}
                variant="contained"
                onClick={onSignUpClick}
              >
                Sign Up
              </Button>
              <Button
                color="secondary"
                disabled={isPerformingAuthAction}
                variant="contained"
                onClick={onSignInClick}
              >
                Sign In
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inboxer", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerClose}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

Bar.propTypes = {
  classes: PropTypes.object.isRequired,

  title: PropTypes.string.isRequired,
  isPerformingAuthAction: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool.isRequired,

  onSettingsClick: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired
};

export default Bar;
