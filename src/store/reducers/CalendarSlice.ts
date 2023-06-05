import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  add,
  eachDayOfInterval,
  endOfWeek,
  format,
  startOfToday,
  startOfWeek,
} from 'date-fns';

export type CalendarState = {
  today: Date;
  selectedDay: Date;
  currentMonth: string;
  firstDayOfWeek: Date;
  days: Date[];
};

const today = startOfToday();
const currentMonth = format(today, 'MMM-yyyy');
const firstDayOfWeek = startOfWeek(today);

const initialState: CalendarState = {
  today,
  selectedDay: today,
  currentMonth,
  firstDayOfWeek,
  days: eachDayOfInterval({
    start: firstDayOfWeek,
    end: endOfWeek(today),
  }),
};

const CalendarSlice = createSlice({
  name: 'Calendar',
  initialState,
  reducers: {
    prevWeek(state) {
      const firstDayPrevWeek = add(state.firstDayOfWeek, { weeks: -1 });
      state.currentMonth = format(firstDayPrevWeek, 'MMM-yyyy');
      state.firstDayOfWeek = firstDayPrevWeek;
      state.days = eachDayOfInterval({
        start: firstDayPrevWeek,
        end: endOfWeek(firstDayPrevWeek),
      });
    },

    nextWeek(state) {
      const firstDayNextWeek = add(state.firstDayOfWeek, { weeks: 1 });
      state.currentMonth = format(firstDayNextWeek, 'MMM-yyyy');
      state.firstDayOfWeek = firstDayNextWeek;
      state.days = eachDayOfInterval({
        start: firstDayNextWeek,
        end: endOfWeek(firstDayNextWeek),
      });
    },

    selectDay(state, action: PayloadAction<Date>) {
      state.selectedDay = action.payload;
    },

    setToday() {
      return initialState;
    },
  },
});

const { actions, reducer } = CalendarSlice;

export const { prevWeek, nextWeek, selectDay, setToday } = actions;

export default reducer;
