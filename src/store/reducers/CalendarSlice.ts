import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from 'date-fns';

export type CalendarState = {
  today: Date;
  selectedDay: Date;
  currentMonth: string;
  firstDayOfMonth: Date;
  days: Date[];
};

const today = startOfToday();
const currentMonth = format(today, 'MMM-yyyy');
const firstDayOfMonth = parse(currentMonth, 'MMM-yyyy', new Date());

const initialState: CalendarState = {
  today,
  selectedDay: today,
  currentMonth,
  firstDayOfMonth,
  days: eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth),
  }),
};

const CalendarSlice = createSlice({
  name: 'Calendar',
  initialState,
  reducers: {
    prevMonth(state) {
      const firstDayPrevMonth = add(state.firstDayOfMonth, { months: -1 });
      state.currentMonth = format(firstDayPrevMonth, 'MMM-yyyy');
      state.firstDayOfMonth = firstDayPrevMonth;
      state.days = eachDayOfInterval({
        start: firstDayPrevMonth,
        end: endOfMonth(firstDayPrevMonth),
      });
    },

    nextMonth(state) {
      const firstDayNextMonth = add(state.firstDayOfMonth, { months: 1 });
      state.currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
      state.firstDayOfMonth = firstDayNextMonth;
      state.days = eachDayOfInterval({
        start: firstDayNextMonth,
        end: endOfMonth(firstDayNextMonth),
      });
    },

    selectDay(state, action: PayloadAction<Date>) {
      state.selectedDay = action.payload;
    },
  },
});

const { actions, reducer } = CalendarSlice;

export const { prevMonth, nextMonth, selectDay } = actions;

export default reducer;
