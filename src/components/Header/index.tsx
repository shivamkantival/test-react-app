import React, {memo} from 'react';

//components
import StyledHeader from "./styles"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return <StyledHeader><h4>Users</h4></StyledHeader>
};

export default memo(Header);