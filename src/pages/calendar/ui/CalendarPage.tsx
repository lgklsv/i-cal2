import CalendarLayout from 'pages/layout';
import { Header } from 'widgets/header';
import { Weekdays } from 'entities/calendar';
import { Calendar } from 'features/calendar';
import { CalendarContainer } from './CalendarPage.styles';

function CalendarPage() {
  return (
    <CalendarLayout>
      <Header />
      <CalendarContainer>
        <Calendar.MonthPicker />
        <Weekdays />
        <Calendar.Days />
      </CalendarContainer>
    </CalendarLayout>
  );
}

export default CalendarPage;
