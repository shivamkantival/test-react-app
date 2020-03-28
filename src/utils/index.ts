//typeDefs
import { Action } from 'config/interfaces';

export * from './apiUtils';
export * from './DOMUtils';
export * from './pausableTimer';

export function createAction<T, S extends object>(actionType: T, payload: S): Action<T, S> {
  return {
    type: actionType,
    payload,
  };
}
