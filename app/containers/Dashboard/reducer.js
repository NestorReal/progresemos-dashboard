/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
// import * as constants from './constants';

export const initialState = fromJS({});

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
