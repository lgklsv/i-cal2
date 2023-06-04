import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Hour } from 'entities/timeline';
import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { useCalEvent } from 'shared/hooks/use-cal-event';
import { timelineHours } from '../model/timelineHours';
import { Table, TableRow, TimelineContainer } from './Timeline.styles';
import { TimelineCell } from './TimelineCell';

function Timeline() {
  const { findEvent } = useCalEvent();
  const { days } = useSelector(CalendarSelector);
  const extendedTimelineHours = [
    {
      hour: '',
      value: NaN,
    },
  ].concat(timelineHours);

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
              <TimelineCell
                key={uuidv4()}
                calEvent={findEvent(day, hourObj.value)}
                day={day}
                hour={hourObj.value}
              />
            ))}
          </TableRow>
        ))}
      </Table>
    </TimelineContainer>
  );
}

export default Timeline;
