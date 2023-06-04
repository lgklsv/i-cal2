import { isEqual, isSameDay, isSameHour, parseISO, setHours } from 'date-fns';
import { useSelector } from 'react-redux';

import { CalEvent } from 'store/reducers/EventsSlice';
import { EventsSelector } from 'store/selectors/EventSelector';

export const useCalEvent = () => {
  const { events } = useSelector(EventsSelector);

  const findEvent = (day: Date, hour: number): CalEvent | undefined => {
    const currentDate = setHours(day, hour);
    return events.find((event) => {
      const eventDate = parseISO(event.date);
      return (
        isSameDay(eventDate, currentDate) && isSameHour(eventDate, currentDate)
      );
    });
  };

  const existsEvent = (time: string | undefined): boolean => {
    if (!time) return false;
    const isEvent = events.find((event) =>
      isEqual(parseISO(event.date), parseISO(time))
    );
    return Boolean(isEvent);
  };

  return { findEvent, existsEvent };
};
