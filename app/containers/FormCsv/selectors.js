import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the formCsv state domain
 */

const selectFormCsvDomain = state => state.formCsv || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FormCsv
 */

const makeSelectFormCsv = () =>
  createSelector(
    selectFormCsvDomain,
    substate => substate,
  );

export default makeSelectFormCsv;
export { selectFormCsvDomain };
