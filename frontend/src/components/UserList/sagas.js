import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS } from './commands';
import { usersFetched, fetchUsersFailed } from './actions';
import { USER_DELETED } from '../UserForm/commands';

const { fetchUsers } = require('./api');

function* fetchUsersSaga(action) {
  try {
    const { data } = yield call(fetchUsers);
    yield put(usersFetched(data));
  } catch ({ message }) {
    yield put(fetchUsersFailed(message));
  }
}
export default function* saga() {
  yield takeLatest(FETCH_USERS, fetchUsersSaga);
  yield takeLatest(USER_DELETED, fetchUsersSaga);
}
