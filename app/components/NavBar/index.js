import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import Dashboard from '@material-ui/icons/Assessment';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import auth from 'utils/auth';
import Tooltip from '@material-ui/core/Tooltip';
import { createStructuredSelector } from 'reselect';

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100vw',
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
    overflow: 'visible',
    display: 'flex',
  },
  flex: {
    flexGrow: 1,
  },
  iconButton: {
    color: theme.palette.primary.contrastText,
  },
  logo: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navIconShow: {
    [theme.breakpoints.up('lg')]: {
      display: 'inline',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  space: {
    height: theme.spacing.unit * 8,
    width: '100vw',
  },
  section: {
    color: 'white',
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
});

const allElements = {
  dashboard: {
    route: '/',
    label: 'Dashboard',
    icon: <Dashboard />,
  },
  settings: {
    route: '/settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
};

const NavBar = props => {
  const { classes, elements } = props;

  const menuElements = elements.map(id => (
    <Tooltip title={allElements[id].label} key={id}>
      <IconButton
        className={classes.iconButton}
        component={componentProps => (
          <Link to={allElements[id].route} {...componentProps} />
        )}
      >
        {allElements[id].icon}
      </IconButton>
    </Tooltip>
  ));
  const logo = null;

  const logoElement = props.logoLink ? (
    <Link to="/" className={classes.logo}>
      {logo}
    </Link>
  ) : (
    logo
  );
  const logout = (
    <Tooltip title="Logout">
      <IconButton
        color="inherit"
        aria-label="Logout"
        style={{ color: '#F25116' }}
        onClick={() => auth.logout()}
        className={classes.iconButton}
      >
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
  const burger = props.onMenuClick ? (
    <IconButton
      color="inherit"
      aria-label="Open menu"
      style={{ color: '#F25116' }}
      onClick={() => props.onMenuClick()}
      className={classes.navIconHide}
    >
      <MenuIcon />
    </IconButton>
  ) : null;
  return (
    <div>
      <AppBar position="static" color="primary" className={classes.root}>
        <Toolbar>
          {burger}
          {logoElement}
          <Typography variant="h6" color="inherit" className={classes.flex} />
          {/* <div className={classes.navIconShow}>
            <Typography
              variant="h6"
              justify="center"
              className={classes.section}
            >
              {props.section}
            </Typography>
          </div> */}
          {menuElements}
          {!props.withoutLogout ? logout : null}
        </Toolbar>
      </AppBar>
      <div className={classes.space} />
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  elements: PropTypes.array,
  logoLink: PropTypes.bool,
  onMenuClick: PropTypes.func,
  withoutLogout: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(NavBar);
