import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productReducer from './productSlice/productSlice'
import cartReducer from './cartSlice/cartSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['carts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)