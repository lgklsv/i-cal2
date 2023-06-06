import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import calendarReducer from './reducers/CalendarSlice';
import eventsReducer from './reducers/EventsSlice';

const persistConfig = {
  key: 'iCal2',
  storage,
  throttle: 400,
};

const appReducer = combineReducers({
  calendarReducer,
  eventsReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
