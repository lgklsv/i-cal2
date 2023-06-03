/* eslint-disable react/no-array-index-key */
import { weekdays } from 'app/config';
import { WeekdaysContainer } from './Weekdays.styles';

function Weekdays() {
  return (
    <WeekdaysContainer>
      {weekdays.map((day, idx) => (
        <div key={idx}>{day}</div>
      ))}
    </WeekdaysContainer>
  );
}

export default Weekdays;
