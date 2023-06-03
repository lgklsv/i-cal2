/* eslint-disable react/no-array-index-key */
import { weekdays } from 'app/config';
import { Hour } from 'entities/timeline';
import { timelineHours } from '../model/timelineHours';
import {
  Table,
  TableCell,
  TableCellContainer,
  TableRow,
  TimelineContainer,
} from './Timeline.styles';

function Timeline() {
  const extendedTimelineHours = ['0AM'].concat(timelineHours);

  return (
    <TimelineContainer>
      <div>
        {timelineHours.map((hour, idx) => (
          <Hour key={idx} hour={hour} />
        ))}
      </div>
      <Table>
        {extendedTimelineHours.map((hour, idx) => (
          <TableRow key={idx}>
            {weekdays.map((day, i) => (
              <TableCellContainer key={i}>
                <TableCell />
              </TableCellContainer>
            ))}
          </TableRow>
        ))}
      </Table>
    </TimelineContainer>
  );
}

export default Timeline;
