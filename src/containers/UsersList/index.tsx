import React, { memo, useCallback, useEffect, useReducer } from 'react';

//hooks
import useInfiniteScroll from 'hooks/useInfiniteScroll';

//typeDefs
import { UsersReducer } from './interfaces';

//reducer
import reducer from './reducer';

//constants
import { INITIAL_USER_STORE } from './constants';

//thunks
import { fetchUsers as fetchUsersThunk } from './thunks';

//components
import UsersListView from './components/UsersListView';

const UsersListContainer: React.FC<{}> = () => {
  const [state, dispatch] = useReducer<UsersReducer>(reducer, INITIAL_USER_STORE),
    { page: currentPage, data, total, isLoading, hasError } = state;

  const fetchUsers = useCallback<() => void>(() => {
    const hasMore = total ? data.length < total : true;
    !isLoading && hasMore && fetchUsersThunk(dispatch, { page: currentPage + 1 });
  }, [total, data.length, isLoading, currentPage]);

  const ref = useInfiniteScroll<HTMLDivElement>({
    isLoading,
    hasError,
    fetchMore: fetchUsers,
  });

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UsersListView ref={ref} isLoading={isLoading} users={data} />;
};

export default memo<{}>(UsersListContainer);
