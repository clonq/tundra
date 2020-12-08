import { SET_CURRENT_USER, SET_CURRENT_MODE, UPDATE_CURRENT_USER } from './commands';

const initialState = {
}

const currentContext = (state = initialState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case SET_CURRENT_USER:
      const { payload: user } = action;
      return { ...state, user };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        user: { ...state.user, ...payload },
      };
    case SET_CURRENT_MODE:
      return {
        ...state,
        mode: payload,
      };
    default:
      return state;
  }
}

export { currentContext };