import { createStore, applyMiddleware } from 'redux';

//reducers
import appReducer from 'reducers';

export default () => createStore(appReducer);
