import { format, parseISO, setHours } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { EventsSelector } from 'store/selectors/EventSelector';
import { CalEvent, createEvent, selectEvent } from 'store/reducers/EventsSlice';
import {
  TimelineCellContainer,
  TimelineCellDefault,
  TimelineCellWithTask,
  TimelineCellWithTaskSelected,
} from './TimelineCell.styles';

type TimelineCellProps = {
  calEvent: CalEvent | undefined;
  day: Date;
  hour: number;
};

export function TimelineCell({ calEvent, day, hour }: TimelineCellProps) {
  const dispatch = useDispatch();
  const { selectedEvent } = useSelector(EventsSelector);

  const createEventHandler = (curDay: Date, curHour: number) => {
    const text = prompt('Enter task text:');
    if (!text) return;
    const currentDateStr = setHours(curDay, curHour).toISOString();
    dispatch(
      createEvent({
        id: uuidv4(),
        text,
        date: currentDateStr,
      })
    );
  };

  const showEventTextHandler = (event: CalEvent) => {
    alert(
      `${event.text} at ${format(parseISO(event.date), 'haa')} on ${format(
        parseISO(event.date),
        'EEEE'
      )}`
    );
  };

  const selectTaskHandler = (event: CalEvent) => {
    dispatch(selectEvent(event));
  };

  return (
    <TimelineCellContainer>
      {calEvent && calEvent !== selectedEvent && (
        <TimelineCellWithTask onClick={() => selectTaskHandler(calEvent)} />
      )}
      {calEvent === selectedEvent && (
        <TimelineCellWithTaskSelected
          onClick={() => showEventTextHandler(calEvent)}
        />
      )}
      {!calEvent && (
        <TimelineCellDefault onClick={() => createEventHandler(day, hour)} />
      )}
    </TimelineCellContainer>
  );
}
