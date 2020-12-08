import { fork } from 'redux-saga/effects';
import userListSaga from './components/UserList/sagas';
import userFormSaga from './components/UserForm/sagas';

export default function* sagas() {
  yield fork(userFormSaga);
  yield fork(userListSaga);
};
