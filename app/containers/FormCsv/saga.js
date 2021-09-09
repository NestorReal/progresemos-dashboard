import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import auth from 'utils/auth';
import {
  addErrorMessage,
  addSuccessMessage,
} from 'containers/Notifications/actions';
import * as constants from './constants';

// Individual exports for testing
export default function* gradeSaga() {
  yield takeLatest(constants.GET_CVS_INIT, saveCsvSaga);
}

export function* saveCsvSaga(action) {
  yield put({
    type: constants.DATA_RETRIEVE_INIT,
  });
  const file = action.cvs;
  const formData = new FormData();
  formData.append(`file`, file);
  try {
    const requestURL = `http://18.188.198.103/api/v1/upload`;
    /* eslint-disable react/prefer-stateless-function */
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'x-access-token': `${auth.getToken()}`,
        Accept: 'multipart/form-data',
      },
      body: formData,
    });
    if (response) {
      yield put({
        type: constants.GET_CVS_SUCCESS,
        response,
      });
      yield put(addSuccessMessage(`Se guardo correctamente el fichero`));
    }
  } catch (error) {
    yield put({
      type: constants.GET_CVS_FAILED,
    });
    yield put(addErrorMessage(`Error al guardar el fichero`));
  }
  yield put({
    type: constants.DATA_RETRIEVE_END,
  });
}
