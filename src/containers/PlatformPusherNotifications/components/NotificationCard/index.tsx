import React, { memo } from 'react';

//typeDefs
import { Notification } from '../../interfaces';

//components
import StyledNotificationCard from './styles';

type NotificationCardProps = {
  notification: Notification;
};

const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => (
  <StyledNotificationCard
    type={notification.type}
    onMouseEnter={notification.timer.pause}
    onMouseLeave={notification.timer.start}
    onClick={notification.timer.finish}
  >
    {notification.message}
  </StyledNotificationCard>
);

export default memo<NotificationCardProps>(NotificationCard);
