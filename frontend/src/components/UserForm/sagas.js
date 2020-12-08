import { call, put, takeLatest } from 'redux-saga/effects';
import { SAVE_USER, DELETE_USER } from './commands';
import { userSaved, saveUserFailed, deleteUserFailed, userDeleted } from './actions';

const { deleteUser, saveUser } = require('./api');

function* saveUserSaga(action) {
  const { payload } = action;
  try {
    const user = yield call(saveUser, payload);
    yield put(userSaved(user));
  } catch ({ message }) {
    yield put(saveUserFailed(message));
  }
}

function* deleteUserSaga(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(deleteUser, id);
    if (data && data.errorMessage) {
      yield put(deleteUserFailed(data.errorMessage));
    } else {
      yield put(userDeleted(id));
    }
  } catch ({ message }) {
    yield put(deleteUserFailed(message));
  }
}
export default function* saga() {
  yield takeLatest(SAVE_USER, saveUserSaga);
  yield takeLatest(DELETE_USER, deleteUserSaga);
}
