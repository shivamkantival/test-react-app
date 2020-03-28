import React, { memo } from 'react';

//constants
import { EMPTY_OBJECT_READONLY } from 'config/constants';

//components
import StyledAppContent from './styles';
import UsersList from 'containers/UsersList';

interface AppContentProps {
  className?: string;
}

const AppContent: React.FC<AppContentProps> = (props = EMPTY_OBJECT_READONLY) => (
  <StyledAppContent aria-label="main app content" className={props.className}>
    <UsersList />
  </StyledAppContent>
);

export default memo<AppContentProps>(AppContent);
