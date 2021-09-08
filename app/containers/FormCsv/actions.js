/*
 *
 * FormCsv actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function postCsv(cvs, history) {
  return {
    type: constants.GET_CVS_INIT,
    cvs,
    history,
  };
}

export function getCsv() {
  return {
    type: constants.GET_CVS_SUCCESS,
  };
}
