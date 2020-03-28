//typeDefs
import { Dispatch } from 'react';
import { ACTION_TYPES, User, UsersStore } from './interfaces';
import { Action } from 'config/interfaces';
//constants
import { FETCH_USERS_API_PATH } from './constants';
//utils
import { createAction, get } from 'utils';
import map from 'lodash/map';

type FetchedUser = { id: string; first_name: string; last_name: string; avatar: string };
interface FetchUsersResponse extends Pick<UsersStore, 'page' | 'total'> {
  data: FetchedUser[];
}

function parseUsers(users: FetchedUser[]): User[] {
  return map<FetchedUser, User>(users, user => ({
    id: user.id,
    avatar: user.avatar,
    name: [user.first_name, user.last_name].join(' '),
  }));
}

export async function fetchUsers(
  dispatch: Dispatch<Action<ACTION_TYPES, Partial<UsersStore>>>,
  params: Pick<UsersStore, 'page'>
) {
  dispatch(createAction<ACTION_TYPES, Partial<UsersStore>>(ACTION_TYPES.FETCH_USERS, {}));

  try {
    const { page, total, data } = await get<FetchUsersResponse>(FETCH_USERS_API_PATH, {
      query: { page: params?.page, delay: 3 },
    });
    dispatch(
      createAction<ACTION_TYPES, Partial<UsersStore>>(ACTION_TYPES.FETCH_USERS_SUCCESS, {
        data: parseUsers(data),
        total,
        page,
      })
    );
  } catch (e) {
    dispatch(
      createAction<ACTION_TYPES, Partial<UsersStore>>(ACTION_TYPES.FETCH_USERS_FAIL, {
        error: e,
      })
    );
  }
}
