import { configureStore } from '@reduxjs/toolkit';
import calendarSlice from './reducers/CalendarSlice';
import eventsSlice from './reducers/EventsSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    events: eventsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
