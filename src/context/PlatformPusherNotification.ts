import React from 'react';

import { NewNotificationDetails } from 'config/interfaces';

export type PushNotification = (notifDetails: NewNotificationDetails) => void;

export type PlatformPusherNotificationContext = {
  pushNotification: PushNotification;
};

export default React.createContext<PlatformPusherNotificationContext>(
  {} as PlatformPusherNotificationContext
);
