export interface UserData {
  name: string;
  profileImage: string;
}

export interface UserDataState {
  data: Array<UserData>;
  error: boolean;
  hasError: boolean;
  hasMore: boolean;
  isLoading: boolean;
  loaded: boolean;
  total: number;
}
