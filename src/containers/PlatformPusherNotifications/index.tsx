import React, { memo, useCallback, useMemo, useState } from 'react';

//typedefs
import { Notification, PlatformPusherProps } from './interfaces';
import { OnTimeout } from 'utils';

//constants
import { EMPTY_ARRAY_READONLY } from 'config/constants';

//utils
import concat from 'lodash/concat';
import remove from 'lodash/remove';
import slice from 'lodash/slice';
import { createNewNotificationFromNotifDetails } from './helpers';

//context
import PlatformPusherNotification, {
  PlatformPusherNotificationContext,
  PushNotification,
} from 'context/PlatformPusherNotification';

//components
import NotificationsView from './components/Notifications';

const PlatformPusherNotifications: React.FC<PlatformPusherProps> = props => {
  const [notifications, setNotifications] = useState<ReadonlyArray<Notification>>(
    EMPTY_ARRAY_READONLY
  );

  const handleNotifTimeout: OnTimeout = useCallback<OnTimeout>(timer => {
    setNotifications(currNotifications => {
      const shallowCopiedNotifications = [...currNotifications];
      remove<Notification>(
        shallowCopiedNotifications,
        (notif: Notification): boolean => notif.timer === timer
      );
      return shallowCopiedNotifications;
    });
  }, []);

  const pushNotification = useCallback<PushNotification>(
    notifDetails => {
      setNotifications(currNotif =>
        concat<Notification>(
          currNotif,
          createNewNotificationFromNotifDetails(notifDetails, { onTimeout: handleNotifTimeout })
        )
      );
    },
    [handleNotifTimeout]
  );

  const context = useMemo<PlatformPusherNotificationContext>(
    () => ({
      pushNotification: pushNotification,
    }),
    [pushNotification]
  );

  const oldestFiveNotifs = useMemo<typeof notifications>(
    () => slice<Notification>(notifications, 0, 5),
    [notifications]
  );

  return (
    <PlatformPusherNotification.Provider value={context}>
      <NotificationsView notifications={oldestFiveNotifs} />
      {props.children}
    </PlatformPusherNotification.Provider>
  );
};

export default memo<PlatformPusherProps>(PlatformPusherNotifications);
