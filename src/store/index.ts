import { configureStore } from '@reduxjs/toolkit';
import calendarSlice from './reducers/CalendarSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
  },
});
