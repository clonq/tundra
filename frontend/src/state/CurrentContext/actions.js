import { SET_CURRENT_MODE, SET_CURRENT_USER, UPDATE_CURRENT_USER } from './commands';

export const setCurrentUser = payload => ({ type: SET_CURRENT_USER, payload });
export const updateCurrentUser = payload => ({ type: UPDATE_CURRENT_USER, payload });
export const setCurrentMode = payload => ({ type: SET_CURRENT_MODE, payload });
