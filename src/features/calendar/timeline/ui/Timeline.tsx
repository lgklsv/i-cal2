import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { isEqual, startOfToday } from 'date-fns';

import { Hour } from 'entities/timeline';
import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { useCalEvent } from 'shared/hooks/use-cal-event';
import { timelineHours } from '../model/timelineHours';
import {
  HourLine,
  Table,
  TableRow,
  TimelineContainer,
} from './Timeline.styles';
import { TimelineCell } from './TimelineCell';

const CELL_HEIGHT = 51;

function Timeline() {
  const [curTime, setCurTime] = useState(new Date(Date.now()));
  const { findEvent } = useCalEvent();
  const { days } = useSelector(CalendarSelector);
  const isCurDayOnPage = days.find((day) => isEqual(day, startOfToday()));
  const extendedTimelineHours = [
    {
      hour: '',
      value: NaN,
    },
  ].concat(timelineHours);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date(Date.now());
      if (now.getMinutes() !== curTime.getMinutes()) {
        setCurTime(now);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [curTime]);

  const hourLineTopDistance =
    51.2 +
    CELL_HEIGHT * curTime.getHours() +
    (CELL_HEIGHT / 60) * curTime.getMinutes();

  return (
    <TimelineContainer>
      <div>
        {timelineHours.map((hourObj) => (
          <Hour key={uuidv4()} hour={hourObj.hour} />
        ))}
      </div>
      <Table>
        <div>
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
        </div>

        {isCurDayOnPage && (
          <HourLine style={{ top: `${hourLineTopDistance}px` }} />
        )}
      </Table>
    </TimelineContainer>
  );
}

export default Timeline;
