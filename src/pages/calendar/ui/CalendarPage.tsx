import CalLayout from 'pages/layout';
import { Header } from 'widgets/header';
import { Weekdays } from 'entities/calendar';
import { Calendar } from 'features/calendar';

function CalendarPage() {
  return (
    <CalLayout>
      <Header />
      <Calendar.MonthPicker />
      <Weekdays />
      <Calendar.Days />
    </CalLayout>
  );
}

export default CalendarPage;
