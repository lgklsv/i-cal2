/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEqual, startOfToday } from 'date-fns';

import { daysSelector } from 'store/selectors/CalendarSelector';
import { useCalEvent } from 'shared/hooks/use-cal-event';
import { Hours } from 'entities/timeline';
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
  const { days } = useSelector(daysSelector);
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
      <Hours timelineHours={timelineHours} />
      <Table>
        <div>
          {extendedTimelineHours.map((hourObj, id) => (
            <TableRow key={id}>
              {days.map((day, i) => (
                <TimelineCell
                  key={i}
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
