import React, { memo, useCallback, useContext, useEffect, useReducer } from 'react';
//hooks
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import useHasChanged from 'hooks/useHasChanged';
//typeDefs
import { UsersReducer } from './interfaces';
import { NOTIFICATION_TYPES } from 'config/interfaces';
//reducer
import reducer from './reducer';
//constants
import { INITIAL_USER_STORE } from './constants';
//thunks
import { fetchUsers as fetchUsersThunk } from './thunks';
//components
import UsersListView from './components/UsersListView';
//context
import PusherNotificationContext, {
  PlatformPusherNotificationContext,
} from 'context/PlatformPusherNotification';
import { getMessageForNotificationPostDataFetch } from './helpers';

const UsersListContainer: React.FC<{}> = () => {
  const [state, dispatch] = useReducer<UsersReducer>(reducer, INITIAL_USER_STORE),
    { page: currentPage, data, total, isLoading, hasError } = state,
    hasIsLoadingChanged = useHasChanged<typeof isLoading>(isLoading);

  const { pushNotification } = useContext<PlatformPusherNotificationContext>(
    PusherNotificationContext
  );

  const fetchUsers = useCallback<() => void>(() => {
    const hasMore = total ? data.length < total : true;
    if (!isLoading && hasMore) {
      pushNotification({ type: NOTIFICATION_TYPES.INFO, message: 'Fetching Users' });
      fetchUsersThunk(dispatch, { page: currentPage + 1 });
    }
  }, [total, data.length, isLoading, currentPage, pushNotification]);

  const ref = useInfiniteScroll<HTMLDivElement>({
    isLoading,
    hasError,
    fetchMore: fetchUsers,
  });

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hasIsLoadingChanged && !isLoading) {
      pushNotification({
        type: hasError ? NOTIFICATION_TYPES.ERROR : NOTIFICATION_TYPES.SUCCESS,
        message: getMessageForNotificationPostDataFetch({
          hasError,
          total: total as number,
          currentDataLength: data.length,
        }),
      });
    }
  }, [data.length, hasError, hasIsLoadingChanged, isLoading, pushNotification, total]);

  return <UsersListView ref={ref} isLoading={isLoading} users={data} />;
};

export default memo<{}>(UsersListContainer);
