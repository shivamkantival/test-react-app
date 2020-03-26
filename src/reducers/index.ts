//utils
import { combineReducers } from 'redux';

//constants
import { STATE_KEYS, USER_DATA } from 'config/constants';

//typeDefs
import { UserData as UserDataType, UserDataState as UserDataStateType } from 'config/interfaces';

// @ts-ignore
import { createReducer } from 'configurable-redux-example/src/utils/index';

const userDataReducer: (
  state: UserDataStateType,
  action: object
) => UserDataStateType = createReducer({
  name: USER_DATA,
  options: {
    async: true,
    initialState: { data: [], hasMore: false, total: null },
  },
});

export default combineReducers({
  [STATE_KEYS.USERS]: userDataReducer,
});
