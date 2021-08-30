/**
 *
 * Dashboard
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getData } from './actions';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  const { data } = props.dashboard;
  useEffect(() => {
    props.dispatch(getData());
  }, []);
  let movieData = {};
  if (data) {
    movieData = data.data;
  }

  return (
    <div>
      <FormattedMessage {...messages.header} />
      {movieData.map(movie => (
        <h1>{movie.Title}</h1>
      ))}
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dashboard: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
