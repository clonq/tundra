import { 
    FETCH_USERS,
    FETCH_USERS_FAILED,
    USERS_FETCHED,
} from './commands';

export const fetchUsers = payload => ({ type: FETCH_USERS, payload });
export const usersFetched = payload => ({ type: USERS_FETCHED, payload });
export const fetchUsersFailed = payload => ({ type: FETCH_USERS_FAILED, payload });
