import { useSelector } from 'react-redux';
import { format, getDay } from 'date-fns';

import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { AppButton } from 'shared/ui';
import { DaysContainer } from './Days.styles';

function Days() {
  const { days } = useSelector(CalendarSelector);
  const daysToSkip = getDay(days[0]);

  return (
    <DaysContainer>
      {daysToSkip > 0 && (
        <div
          style={{
            gridColumn: `span ${daysToSkip} / span ${daysToSkip}`,
          }}
        />
      )}
      {days.map((day) => (
        <AppButton key={day.toString()}>
          <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
        </AppButton>
      ))}
    </DaysContainer>
  );
}

export default Days;
