//typeDefs
import { UsersStore } from './interfaces';

export const INITIAL_USER_STORE: UsersStore = {
  isLoading: false,
  hasError: false,
  data: [],
  page: 0,
  error: null,
  total: null,
};

export const FETCH_USERS_API_PATH = '/api/users';
