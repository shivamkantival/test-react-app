import React, { memo, ReactNode } from 'react';

//typeDefs
import { Notification } from '../../interfaces';

//components
import StyledNotificationsView from './style';
import NotificationCard from '../NotificationCard';
import { CSSTransition } from 'react-transition-group';

//utils
import map from 'lodash/map';

type NotificationsProps = {
  notifications: ReadonlyArray<Notification>;
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <StyledNotificationsView enter exit>
      {map<Notification, ReactNode>(
        notifications,
        (notif: Notification): ReactNode => (
          <CSSTransition
            classNames="animation"
            timeout={500}
            key={notif.id}
            in
            onEntered={notif.timer.start}
          >
            <NotificationCard notification={notif} />
          </CSSTransition>
        )
      )}
    </StyledNotificationsView>
  );
};

export default memo<NotificationsProps>(Notifications);
