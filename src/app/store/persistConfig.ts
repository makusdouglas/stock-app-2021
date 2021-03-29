/** @format */

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistBlackList from './backlist';
import rootReducer from './reducers';
import persistWhiteList from './whitelist';

const persistedRootReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
    version: 1,
    whitelist: persistWhiteList,
    blacklist: persistBlackList,
  },
  rootReducer
);
export default persistedRootReducer;
