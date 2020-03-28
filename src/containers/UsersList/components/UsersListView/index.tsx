import React, { forwardRef, memo, ReactElement, RefAttributes } from 'react';

//typeDefs
import { User, UsersStore } from '../../interfaces';

//utils
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

//constants
import { EMPTY_ARRAY_READONLY } from 'config/constants';

//components
import StyledUsersListView from './styles';
import Loader from 'components/Loader';
import UserCard from '../UserCard';

interface UsersListViewProps extends Pick<UsersStore, 'isLoading'> {
  users: Array<User>;
}

const UsersListView = forwardRef<HTMLDivElement, UsersListViewProps>((props, ref) => {
  const { users = EMPTY_ARRAY_READONLY, isLoading } = props,
    isLoadingForFirstTime = isLoading && isEmpty(users);

  return (
    <StyledUsersListView
      role="list"
      ref={ref}
      className={isLoadingForFirstTime ? 'fullPageLoad' : ''}
    >
      {isLoadingForFirstTime ? (
        <Loader dimension={40} className="loader" />
      ) : (
        <>
          {map<User, ReactElement>(users, user => (
            <UserCard key={user.id} user={user} className="listItem" />
          ))}
          {isLoading && <Loader dimension={10} className="loader listItem" />}
        </>
      )}
    </StyledUsersListView>
  );
});

export default memo<RefAttributes<HTMLDivElement> & UsersListViewProps>(UsersListView);
