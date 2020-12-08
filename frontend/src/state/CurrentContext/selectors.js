import { createSelector } from 'reselect';
// import { selectAllUsers } from '../../components/UserList/selectors';

export const currentContextSelector = state => state.currentContext;

export const selectCurrentUserId = createSelector(
  currentContextSelector,
  ({ user = {}}) => user.id
);

// export const selectCurrentUser = createSelector(
//   selectAllUsers,
//   selectCurrentUserId,
//   (users = [], currentUserId) => users.find(it => it.id === currentUserId)
// );

export const selectCurrentUser = createSelector(
  currentContextSelector,
  context => context.user
);

export const selectCurrentMode = createSelector(
  currentContextSelector,
  context => context.mode
);
