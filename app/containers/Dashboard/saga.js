import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
// import auth from 'utils/auth';
import * as constants from './constants';
export default function* gradeSaga() {
  yield takeLatest(constants.GET_DATA_INIT, getDataSaga);
}

export function* getDataSaga() {
  try {
    const requestURL = `https://jsonmock.hackerrank.com/api/movies/search/`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_DATA_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_DATA_FAILED,
    });
  }
}
