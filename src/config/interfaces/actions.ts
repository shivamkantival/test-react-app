export interface Action<T, B extends object> {
  type: T;
  payload: B;
}
