/* eslint-disable react/no-array-index-key */
import { useSelector } from 'react-redux';
import { isSameDay, isSameHour, parseISO, setHours } from 'date-fns';

import { EventsSelector } from 'store/selectors/EventSelector';
import { Hour } from 'entities/timeline';
import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { timelineHours } from '../model/timelineHours';
import {
  Table,
  TableCell,
  TableCellContainer,
  TableCellSelected,
  TableRow,
  TimelineContainer,
} from './Timeline.styles';

function Timeline() {
  const { events } = useSelector(EventsSelector);
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

  return (
    <TimelineContainer>
      <div>
        {timelineHours.map((hourObj, idx) => (
          <Hour key={idx} hour={hourObj.hour} />
        ))}
      </div>
      <Table>
        {extendedTimelineHours.map((hourObj, idx) => (
          <TableRow key={idx}>
            {days.map((day, i) => (
              <TableCellContainer key={i}>
                {findEvent(day, hourObj.value) ? (
                  <TableCellSelected />
                ) : (
                  <TableCell />
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
