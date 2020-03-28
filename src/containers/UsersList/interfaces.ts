import { Reducer } from 'react';

export enum ACTION_TYPES {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
}

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type UsersStore = {
  readonly page: number;
  readonly isLoading: boolean;
  readonly hasError: boolean;
  readonly total: number | null;
  readonly data: Array<User>;
  readonly error: Error | null;
};

export type UsersReducer = Reducer<
  UsersStore,
  {
    type: ACTION_TYPES;
    payload: Partial<UsersStore>;
  }
>;
