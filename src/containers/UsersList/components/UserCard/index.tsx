import React, { memo } from 'react';

//components
import StyledUserCard from './styles';

//typeDefs
import { User } from '../../interfaces';

type UserCardProps = {
  readonly user: User;
  readonly className: string;
};

const UserCard: React.FC<UserCardProps> = ({ user, className }) => (
  <StyledUserCard role="listitem" className={`userCard ${className}`}>
    <div className="userDetailsContainer">
      <img src={user.avatar} alt="user profile" className="userImage" />
      <h4 className="userName">{user.name}</h4>
    </div>
    <div className="divider" />
  </StyledUserCard>
);

export default memo<UserCardProps>(UserCard);
