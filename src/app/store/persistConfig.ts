/** @format */

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistBlackList from './backlist';
import rootReducer from './reducers';
import persistWhiteList from './whitelist';
import { encryptTransform } from 'redux-persist-transform-encrypt'

const encryptor = encryptTransform({
  secretKey: process.env.REACT_APP_SECRET_PERSIST_ENCRYPT || '38e9wuij4r89ui4er8uih4er8yu3we8iuqw',
  onError: (err) => { throw new Error(err.message) }
})
const persistedRootReducer = persistReducer(
  {
    // transforms: [encryptor],
    key: 'root',
    storage: storage,
    version: 1,
    whitelist: persistWhiteList,
    blacklist: persistBlackList,
  },
  rootReducer
);
export default persistedRootReducer;
