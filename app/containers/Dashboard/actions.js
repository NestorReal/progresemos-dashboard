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

export function calculateClv(mails) {
  return {
    type: constants.CLV_CALCULATION_INIT,
    mails,
  };
}

export function getCharts() {
  return {
    type: constants.GET_CHARTS_INIT,
  };
}

export function checkProcessStatusChange() {
  return {
    type: constants.CHECK_STATUS_INIT,
  };
}

export function exportCsv(payload) {
  return {
    type: constants.CSV_EXPORT_INIT,
    payload,
  };
}

export function exportCustomMails(mails) {
  return {
    type: constants.CUSTOM_MAILS_EXPORT,
    mails,
  };
}

export function recalculateClv() {
  return {
    type: constants.CLV_RECALCULATE_INIT,
  };
}

export function cleanCsvData() {
  return {
    type: constants.CLEAN_CSV_DATA,
  };
}

export function check() {
  return {
    type: constants.GET_CHECKED_INIT,
  };
}

export function checkF() {
  return {
    type: constants.GET_CHECKEDF_INIT,
  };
}

export function checkCompanyAccess(plan, subscription) {
  return {
    type: constants.CHECK_ACCESS_INIT,
    plan,
    subscription,
  };
}

export function checkSummariesStatus() {
  return {
    type: constants.CHECK_SUMMARIES_STATUS_INIT,
  };
}

export function getTrackerStatus() {
  return {
    type: constants.GET_TRACKERSTATUS_INIT,
  };
}

export function hasEnhancedEcommerce() {
  return {
    type: constants.HAS_ENHANCED_INIT,
  };
}

export function getImage() {
  return {
    type: constants.GET_IMAGE_INIT,
  };
}

export function getColor() {
  return {
    type: constants.GET_COLOR_INIT,
  };
}

export function checkProcessStatus() {
  return {
    type: constants.CHECK_PROCESS_STATUS_INIT,
  };
}
