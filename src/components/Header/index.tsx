import React, { memo } from 'react';

//components
import StyledHeader from './styles';

//constants
import { EMPTY_OBJECT_READONLY } from 'config/constants';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = (props = EMPTY_OBJECT_READONLY) => (
  <StyledHeader className={props.className}>
    <h3>Users</h3>
  </StyledHeader>
);

export default memo<HeaderProps>(Header);
