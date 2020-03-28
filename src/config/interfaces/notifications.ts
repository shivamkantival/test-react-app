export enum NOTIFICATION_TYPES {
  SUCCESS,
  ERROR,
  INFO,
}

export type NewNotificationDetails = {
  readonly timeout?: number;
  readonly type: NOTIFICATION_TYPES;
  readonly message: string;
};
