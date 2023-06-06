import { eachDayOfInterval } from 'date-fns';

export const getDaysInterval = (start: Date, end: Date): string[] => {
  return eachDayOfInterval({
    start,
    end,
  }).map((date) => date.toISOString());
};
