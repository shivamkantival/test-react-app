import React, { memo, ReactNode } from 'react';

//typeDefs
import { Notification } from '../../interfaces';

//components
import StyledNotificationsView from './style';
import NotificationCard from '../NotificationCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//utils
import map from 'lodash/map';

type NotificationsProps = {
  notifications: ReadonlyArray<Notification>;
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <StyledNotificationsView>
      <TransitionGroup enter exit className="notificationListContainer">
        {map<Notification, ReactNode>(
          notifications,
          (notif: Notification): ReactNode => (
            <CSSTransition classNames="animation" timeout={500} key={notif.id} in>
              <NotificationCard notification={notif} />
            </CSSTransition>
          )
        )}
      </TransitionGroup>
    </StyledNotificationsView>
  );
};

export default memo<NotificationsProps>(Notifications);
