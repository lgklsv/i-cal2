/* eslint-disable react/no-array-index-key */
import { HourLine } from 'entities/timeline';
import { timelineHours } from '../model/timelineHours';
import { TimelineContainer } from './Timeline.styles';

function Timeline() {
  return (
    <TimelineContainer>
      {timelineHours.map((hour, idx) => (
        <HourLine hour={hour} key={idx} />
      ))}
    </TimelineContainer>
  );
}

export default Timeline;
