//typeDefs
import { NewNotificationDetails, Notification } from './interfaces';

//utils
import uniqueId from 'lodash/uniqueId';
import pick from 'lodash/pick';
import { PausableTimer, OnTimeout } from 'utils/pausableTimer';

export function createNewNotificationFromNotifDetails(
  notifDetails: NewNotificationDetails,
  { onTimeout }: { onTimeout: OnTimeout }
): Notification {
  return {
    ...pick<typeof notifDetails, 'message' | 'type'>(notifDetails, ['message', 'type']),
    id: uniqueId('notification_object_'),
    timer: new PausableTimer(onTimeout, notifDetails.timeout || 5000, {}),
  };
}
