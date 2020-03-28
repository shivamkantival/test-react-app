export function getMessageForNotificationPostDataFetch({
  hasError,
  total,
  currentDataLength,
}: {
  readonly hasError: boolean;
  readonly total: number;
  readonly currentDataLength: number;
}): string {
  if (hasError) {
    return 'Couldn\'t fetch users';
  } else {
    return total === currentDataLength ? 'Fetched all users!' : 'Users fetched, more to go!';
  }
}
