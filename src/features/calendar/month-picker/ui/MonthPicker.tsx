import { format } from 'date-fns';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from 'shared/ui';
import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { nextMonth, prevMonth } from 'store/reducers/CalendarSlice';
import { MonthPickerContainer, ControlsContainer } from './MonthPicker.styles';

function MonthPicker() {
  const dispatch = useDispatch();
  const { firstDayOfMonth } = useSelector(CalendarSelector);

  const prevMonthHandler = () => {
    dispatch(prevMonth());
  };

  const nextMonthHandler = () => {
    dispatch(nextMonth());
  };

  return (
    <MonthPickerContainer>
      <h2>{format(firstDayOfMonth, 'MMMM yyyy')}</h2>
      <ControlsContainer>
        <AppButton onClick={prevMonthHandler} icon={<IoChevronBackOutline />} />
        <AppButton
          onClick={nextMonthHandler}
          icon={<IoChevronForwardOutline />}
        />
      </ControlsContainer>
    </MonthPickerContainer>
  );
}

export default MonthPicker;
