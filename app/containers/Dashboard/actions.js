/*
 *
 * Dashboard actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function getData() {
  return {
    type: constants.GET_DATA_INIT,
  };
}
