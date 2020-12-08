import { USERS_FETCHED } from "./commands";
import { USER_SAVED } from "../UserForm/commands";

const initialState = {};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_FETCHED:
      const { payload: users } = action;
      return { ...state, all: users };
    case USER_SAVED:
      const { payload: user } = action;
      const existingUserIndex = state.all.findIndex(({ id }) => id === user.id);
      if (existingUserIndex > -1) {
        return {
          ...state, all: [
            ...state.all.slice(0, existingUserIndex),
            user,
            ...state.all.slice(existingUserIndex + 1)
          ]
        };
      }
      return { ...state, all: [...state.all, user] };
    default:
      return state;
  }
}

export { users };