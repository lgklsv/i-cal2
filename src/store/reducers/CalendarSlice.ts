import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
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
      // const firstDayPrevMonth = add(state.firstDayOfMonth, { months: -1 });
      // state.currentMonth = format(firstDayPrevMonth, 'MMM-yyyy');
      // state.firstDayOfMonth = firstDayPrevMonth;
      // state.days = eachDayOfInterval({
      //   start: firstDayPrevMonth,
      //   end: endOfMonth(firstDayPrevMonth),
      // });
    },

    nextWeek(state) {
      // const firstDayNextMonth = add(state.firstDayOfMonth, { months: 1 });
      // state.currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
      // state.firstDayOfMonth = firstDayNextMonth;
      // state.days = eachDayOfInterval({
      //   start: firstDayNextMonth,
      //   end: endOfMonth(firstDayNextMonth),
      // });
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
