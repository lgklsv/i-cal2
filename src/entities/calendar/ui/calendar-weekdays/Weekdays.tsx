/* eslint-disable react/no-array-index-key */
import { WeekdaysContainer } from './Weekdays.styles';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

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
