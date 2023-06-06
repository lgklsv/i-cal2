import { useDispatch, useSelector } from 'react-redux';
import { format, isEqual, isToday } from 'date-fns';

import { daysSelector } from 'store/selectors/CalendarSelector';
import { selectDay } from 'store/reducers/CalendarSlice';
import { Day } from 'entities/calendar';
import { DaysContainer } from './Days.styles';

function Days() {
  const dispatch = useDispatch();
  const { days, selectedDay } = useSelector(daysSelector);

  const selectDayHandler = (day: Date) => {
    dispatch(selectDay(day));
  };

  return (
    <DaysContainer>
      {days.map((day) => (
        <Day
          today={isToday(day)}
          selected={isEqual(day, selectedDay)}
          onClick={() => selectDayHandler(day)}
          key={day.toString()}
        >
          <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
        </Day>
      ))}
    </DaysContainer>
  );
}

export default Days;
