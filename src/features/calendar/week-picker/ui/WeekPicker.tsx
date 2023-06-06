import { format } from 'date-fns';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from 'shared/ui';
import { weekSelector } from 'store/selectors/CalendarSelector';
import { nextWeek, prevWeek } from 'store/reducers/CalendarSlice';
import { WeekPickerContainer, YearText } from './WeekPicker.styles';

function WeekPicker() {
  const dispatch = useDispatch();
  const { firstDayOfWeek } = useSelector(weekSelector);

  const prevWeekHandler = () => {
    dispatch(prevWeek());
  };

  const nextWeekHandler = () => {
    dispatch(nextWeek());
  };

  return (
    <WeekPickerContainer>
      <AppButton onClick={prevWeekHandler} icon={<IoChevronBackOutline />} />
      <h2>
        {format(firstDayOfWeek, 'MMMM')}{' '}
        <YearText>{format(firstDayOfWeek, 'yyyy')}</YearText>
      </h2>
      <AppButton onClick={nextWeekHandler} icon={<IoChevronForwardOutline />} />
    </WeekPickerContainer>
  );
}

export default WeekPicker;
