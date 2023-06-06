import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  add,
  endOfWeek,
  format,
  parseISO,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import { getDaysInterval } from 'shared/lib/date';

export type CalendarState = {
  today: Date;
  selectedDay: string;
  currentMonth: string;
  firstDayOfWeek: string;
  days: string[];
};

const today = startOfToday();
const currentMonth = format(today, 'MMM-yyyy');
const firstDayOfWeek = startOfWeek(today).toISOString();

const initialState: CalendarState = {
  today,
  selectedDay: today.toISOString(),
  currentMonth,
  firstDayOfWeek,
  days: getDaysInterval(parseISO(firstDayOfWeek), endOfWeek(today)),
};

const CalendarSlice = createSlice({
  name: 'Calendar',
  initialState,
  reducers: {
    prevWeek(state) {
      const firstDayPrevWeek = add(parseISO(state.firstDayOfWeek), {
        weeks: -1,
      });
      state.currentMonth = format(firstDayPrevWeek, 'MMM-yyyy');
      state.firstDayOfWeek = firstDayPrevWeek.toISOString();
      state.days = getDaysInterval(
        firstDayPrevWeek,
        endOfWeek(firstDayPrevWeek)
      );
    },

    nextWeek(state) {
      const firstDayNextWeek = add(parseISO(state.firstDayOfWeek), {
        weeks: 1,
      });
      state.currentMonth = format(firstDayNextWeek, 'MMM-yyyy');
      state.firstDayOfWeek = firstDayNextWeek.toISOString();
      state.days = getDaysInterval(
        firstDayNextWeek,
        endOfWeek(firstDayNextWeek)
      );
    },

    selectDay(state, action: PayloadAction<Date>) {
      state.selectedDay = action.payload.toISOString();
    },

    setToday() {
      return initialState;
    },
  },
});

const { actions, reducer } = CalendarSlice;

export const { prevWeek, nextWeek, selectDay, setToday } = actions;

export default reducer;
