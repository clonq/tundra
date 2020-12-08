import {
  SAVE_USER, USER_SAVED, SAVE_USER_FAILED,
  DELETE_USER, USER_DELETED, DELETE_USER_FAILED  
} from './commands';

export const saveUser = payload => ({ type: SAVE_USER, payload });
export const userSaved = payload => ({ type: USER_SAVED, payload });
export const saveUserFailed = payload => ({ type: SAVE_USER_FAILED, payload });

export const deleteUser = payload => ({ type: DELETE_USER, payload });
export const userDeleted = payload => ({ type: USER_DELETED, payload });
export const deleteUserFailed = payload => ({ type: DELETE_USER_FAILED, payload });
