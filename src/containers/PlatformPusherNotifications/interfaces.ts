import React from 'react';
import { PausableTimer } from 'utils';
import { NOTIFICATION_TYPES } from 'config/interfaces';

export * from 'config/interfaces/notifications';

export type Notification = {
  readonly id: string;
  readonly type: NOTIFICATION_TYPES;
  readonly message: string;
  readonly timer: PausableTimer;
};

export type PlatformPusherProps = { children: React.ReactNode };
