import CalendarLayout from 'pages/layout';
import { Weekdays } from 'entities/calendar';
import { Calendar } from 'features/calendar';
import { CalendarApp, CalendarContainer } from './CalendarPage.styles';

function CalendarPage() {
  return (
    <CalendarLayout>
      <CalendarApp>
        <CalendarContainer>
          <Calendar.MonthPicker />
          <Weekdays />
          <Calendar.Days />
        </CalendarContainer>
      </CalendarApp>
    </CalendarLayout>
  );
}

export default CalendarPage;
