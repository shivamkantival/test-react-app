import React, { memo } from 'react';

//typeDefs
import { Notification } from '../../interfaces';

//components
import StyledNotificationCard from './styles';

type NotificationCardProps = {
  notification: Notification;
};

const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => (
  <StyledNotificationCard type={notification.type}>{notification.message}</StyledNotificationCard>
);

export default memo<NotificationCardProps>(NotificationCard);
