import { createSelector } from 'reselect';

export const usersSelector = state => state.users;
export const selectAllUsers = createSelector(
  usersSelector,
  ({ all = [] }) => all.map(({ firstName = '', lastName = '', ...rest }) => ({ ...rest, firstName, lastName, label: `${firstName} ${lastName}`}))
);
