import { parseISO } from 'date-fns';

export const CalendarSelector = (state: RootState) => state.calendarReducer;

export const daysSelector = (state: RootState) => {
  const days = state.calendarReducer.days.map((day) => parseISO(day));
  const selectedDay = parseISO(state.calendarReducer.selectedDay);
  return { days, selectedDay };
};

export const weekSelector = (state: RootState) => {
  const firstDayOfWeek = parseISO(state.calendarReducer.firstDayOfWeek);
  return { firstDayOfWeek };
};
