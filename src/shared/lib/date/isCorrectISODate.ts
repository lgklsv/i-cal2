import { parseISO } from 'date-fns';

export function isCorrectISODate(dateToCheck: string | undefined | null) {
  if (!dateToCheck) return false;
  const date = parseISO(dateToCheck);
  if (date instanceof Date) {
    const text = Date.prototype.toString.call(date);
    return text !== 'Invalid Date';
  }
  return false;
}
