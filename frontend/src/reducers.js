import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { currentContext } from './state/CurrentContext/reducers';
import { users } from './components/UserList/reducers';

const appReducer = history => combineReducers({
  users,
  currentContext,
  router: connectRouter(history),
})

export default appReducer;
