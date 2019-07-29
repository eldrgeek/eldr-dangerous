import React, { Component } from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import PersonIcon from "@material-ui/icons/Person";

const styles = theme => ({
  signUpButton: {
    marginRight: theme.spacing(1)
  }
});

const Bar = props => {
  const [menu, setMenu] = React.useState({ anchorEl: null });

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

  const { classes } = props;

  // Properties
  const { title, isPerformingAuthAction, isSignedIn, user } = props;

  // Events
  const { onSignUpClick, onSignInClick } = props;

  return (
    <AppBar color="primary" position="static">
      <Toolbar variant="regular">
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

export default withStyles(styles)(Bar);
