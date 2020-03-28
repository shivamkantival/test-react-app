//typesDefs
import { ACTION_TYPES, User, UsersReducer, UsersStore } from './interfaces';

//utils
import isFunction from 'lodash/isFunction';
import concat from 'lodash/concat';
import pick from 'lodash/pick';

//constants
import { EMPTY_ARRAY_READONLY } from 'config/constants';

const KEYS_TO_PICK_FROM_PAYLOAD_ON_SUCCESS: Array<keyof UsersStore> = ['total', 'page'];

const handleFetchStart: UsersReducer = currState => ({
  ...currState,
  isLoading: true,
  hasError: false,
  error: null,
});

const handleFetchSuccess: UsersReducer = (currState, { payload }) => ({
  ...currState,
  ...pick<typeof payload>(payload, KEYS_TO_PICK_FROM_PAYLOAD_ON_SUCCESS),
  data: concat<User>(currState.data, payload.data || EMPTY_ARRAY_READONLY),
  isLoading: false,
  hasError: false,
  error: null,
});

const handleFetchFail: UsersReducer = (currState, { payload }) => ({
  ...currState,
  ...payload,
  hasError: true,
  isLoading: false,
});

const ACTION_TYPE_TO_STATE_UPDATER = {
  [ACTION_TYPES.FETCH_USERS]: handleFetchStart,
  [ACTION_TYPES.FETCH_USERS_SUCCESS]: handleFetchSuccess,
  [ACTION_TYPES.FETCH_USERS_FAIL]: handleFetchFail,
};

const userStoreReducer: UsersReducer = function (currentState, action) {
  const updateHandler = ACTION_TYPE_TO_STATE_UPDATER[action.type];

  return isFunction(updateHandler) ? updateHandler(currentState, action) : currentState;
};

export default userStoreReducer;
