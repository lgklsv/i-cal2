import CalendarLayout from 'pages/layout';
import { Weekdays } from 'entities/calendar';
import { Calendar } from 'features/calendar';
import { CalendarApp, CalendarContainer } from './CalendarPage.styles';

function CalendarPage() {
  return (
    <CalendarLayout>
      <CalendarApp>
        <CalendarContainer>
          <Calendar.WeekPicker />
          <Weekdays />
          <Calendar.Days />
        </CalendarContainer>
        <Calendar.Timeline />
      </CalendarApp>
    </CalendarLayout>
  );
}

export default CalendarPage;
