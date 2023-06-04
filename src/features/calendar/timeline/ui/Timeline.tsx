/* eslint-disable no-alert */
import { useDispatch, useSelector } from 'react-redux';
import { format, isSameDay, isSameHour, parseISO, setHours } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import { EventsSelector } from 'store/selectors/EventSelector';
import { Hour } from 'entities/timeline';
import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { createEvent, selectEvent } from 'store/reducers/EventsSlice';
import { timelineHours } from '../model/timelineHours';
import {
  Table,
  TableCell,
  TableCellContainer,
  TableCellWithTask,
  TableCellWithTaskSelected,
  TableRow,
  TimelineContainer,
} from './Timeline.styles';

function Timeline() {
  const dispatch = useDispatch();
  const { events, selectedEvent } = useSelector(EventsSelector);
  const { days } = useSelector(CalendarSelector);
  const extendedTimelineHours = [
    {
      hour: '',
      value: NaN,
    },
  ].concat(timelineHours);

  const findEvent = (day: Date, hour: number) => {
    const currentDate = setHours(day, hour);
    return events.find((event) => {
      const eventDate = parseISO(event.date);
      return (
        isSameDay(eventDate, currentDate) && isSameHour(eventDate, currentDate)
      );
    });
  };

  const createEventHandler = (day: Date, hour: number) => {
    const text = prompt('Enter task text:');
    if (!text) return;
    const currentDateStr = setHours(day, hour).toISOString();
    dispatch(
      createEvent({
        id: uuidv4(),
        text,
        date: currentDateStr,
      })
    );
  };

  const showEventTextHandler = (day: Date, hour: number) => {
    const event = findEvent(day, hour);
    if (event)
      alert(
        `${event.text} at ${format(parseISO(event.date), 'haa')} on ${format(
          parseISO(event.date),
          'EEEE'
        )}`
      );
  };

  const selectTaskHandler = (day: Date, hour: number) => {
    const event = findEvent(day, hour);

    if (event) {
      dispatch(selectEvent(event));
    }
  };

  return (
    <TimelineContainer>
      <div>
        {timelineHours.map((hourObj) => (
          <Hour key={uuidv4()} hour={hourObj.hour} />
        ))}
      </div>
      <Table>
        {extendedTimelineHours.map((hourObj) => (
          <TableRow key={uuidv4()}>
            {days.map((day) => (
              <TableCellContainer key={uuidv4()}>
                {findEvent(day, hourObj.value) &&
                  findEvent(day, hourObj.value) !== selectedEvent && (
                    <TableCellWithTask
                      onClick={() => selectTaskHandler(day, hourObj.value)}
                    />
                  )}
                {findEvent(day, hourObj.value) === selectedEvent && (
                  <TableCellWithTaskSelected
                    onClick={() => showEventTextHandler(day, hourObj.value)}
                  />
                )}
                {!findEvent(day, hourObj.value) && (
                  <TableCell
                    onClick={() => createEventHandler(day, hourObj.value)}
                  />
                )}
              </TableCellContainer>
            ))}
          </TableRow>
        ))}
      </Table>
    </TimelineContainer>
  );
}

export default Timeline;
