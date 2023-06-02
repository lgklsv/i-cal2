import { format } from 'date-fns';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import { AppButton } from 'shared/ui';
import { CalendarSelector } from 'store/selectors/CalendarSelector';
import { MonthPickerContainer, ControlsContainer } from './MonthPicker.styles';

function MonthPicker() {
  const { firstDayOfMonth } = useSelector(CalendarSelector);

  return (
    <MonthPickerContainer>
      <h2>{format(firstDayOfMonth, 'MMMM yyyy')}</h2>
      <ControlsContainer>
        <AppButton icon={<IoChevronBackOutline />} />
        <AppButton icon={<IoChevronForwardOutline />} />
      </ControlsContainer>
    </MonthPickerContainer>
  );
}

export default MonthPicker;
