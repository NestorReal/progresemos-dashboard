/**
 *
 * Loader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createStructuredSelector } from 'reselect';

const styles = theme => ({
  imgContainer: {
    textAlign: 'center',
    padding: '0 5%',
    [theme.breakpoints.up('sm')]: {
      padding: '0 20%',
    },
  },
  img: {
    margin: theme.spacing.unit * 4,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      width: '30%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
    },
  },
  progress: {
    width: '100%',
    marginLeft: '0%',
  },
  container: {
    marginTop: theme.spacing.unit * -12,
    height: '100vh',
    overflow: 'hidden',
  },
  item: {
    flexBasis: 0,
  },
});

const Loader = props => {
  const logo = null;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={!props.notFullHeight ? props.classes.container : ''}
    >
      <div className={props.classes.imgContainer}>
        {logo}
        <br />
        <LinearProgress className={props.classes.progress} color="secondary" />
        <Typography variant="h5" align="center" style={{ color: '#024059' }}>
          {props.message}
        </Typography>
      </div>
    </Grid>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
  classes: PropTypes.object,
  notFullHeight: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(Loader);
