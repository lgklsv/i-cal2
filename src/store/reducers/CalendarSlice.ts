import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
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
  reducers: {},
});

const { actions, reducer } = CalendarSlice;

// export const { setCalendar, resetCalendar } = actions;

export default reducer;
