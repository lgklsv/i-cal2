import { format } from 'date-fns';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from 'shared/ui';
import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { nextWeek, prevWeek } from 'store/reducers/CalendarSlice';
import {
  WeekPickerContainer,
  ControlsContainer,
  YearText,
} from './WeekPicker.styles';

function WeekPicker() {
  const dispatch = useDispatch();
  const { firstDayOfWeek } = useSelector(CalendarSelector);

  const prevWeekHandler = () => {
    dispatch(prevWeek());
  };

  const nextWeekHandler = () => {
    dispatch(nextWeek());
  };

  return (
    <WeekPickerContainer>
      <h2>
        {format(firstDayOfWeek, 'MMMM')}{' '}
        <YearText>{format(firstDayOfWeek, 'yyyy')}</YearText>
      </h2>
      <ControlsContainer>
        <AppButton onClick={prevWeekHandler} icon={<IoChevronBackOutline />} />
        <AppButton
          onClick={nextWeekHandler}
          icon={<IoChevronForwardOutline />}
        />
      </ControlsContainer>
    </WeekPickerContainer>
  );
}

export default WeekPicker;
