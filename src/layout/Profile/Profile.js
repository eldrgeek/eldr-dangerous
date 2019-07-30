import React, { Component } from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";

import EditIcon from "@material-ui/icons/Edit";

const styles = theme => ({
  profile: {
    textAlign: "center",

    marginTop: theme.spacing(1)
  },

  changeAvatarContainer: {
    position: "relative",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
  },

  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: "auto",
    marginLeft: "auto"
  },

  changeAvatar: {
    position: "absolute",
    top: "-7.5%",
    left: "60%"
  },

  info: {
    marginTop: theme.spacing(0.5)
  },

  emailAddress: {
    marginTop: -theme.spacing(0.5)
  }
});

class Profile extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const {
      user = {
        photoURL:
          "data:image/jpeg;base64,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",
        displayName: "Mike",
        email: "mw@mike-wolf.com"
      },
      isPerformingAuthAction
    } = this.props;

    // Events
    const { onChangeAvatarClick } = this.props;

    if (!user.photoURL || !user.displayName || !user.email) {
      return null;
    }

    return (
      <div className={classes.profile}>
        <div className={classes.changeAvatarContainer}>
          <Avatar className={classes.avatar} alt="Avatar" src={user.photoURL} />

          {onChangeAvatarClick && (
            <Tooltip title="Change avatar">
              <Fab
                className={classes.changeAvatar}
                color="primary"
                disabled={isPerformingAuthAction}
                size="small"
                onClick={onChangeAvatarClick}
              >
                <EditIcon />
              </Fab>
            </Tooltip>
          )}
        </div>

        <div className={classes.info}>
          <Typography variant="h6">{user.displayName}</Typography>
          <Typography
            className={classes.emailAddress}
            color="textSecondary"
            variant="body1"
          >
            {user.email}
          </Typography>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,

  user: PropTypes.object.isRequired,
  isPerformingAuthAction: PropTypes.bool,

  onChangeAvatarClick: PropTypes.func
};

export default withStyles(styles)(Profile);
