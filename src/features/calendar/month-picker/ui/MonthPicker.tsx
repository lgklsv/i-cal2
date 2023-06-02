import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';
import { AppButton } from 'shared/ui';
import { MonthPickerContainer, ControlsContainer } from './MonthPicker.styles';

function MonthPicker() {
  return (
    <MonthPickerContainer>
      <h2>June 2023</h2>
      <ControlsContainer>
        <AppButton icon={<IoChevronBackOutline />} />
        <AppButton icon={<IoChevronForwardOutline />} />
      </ControlsContainer>
    </MonthPickerContainer>
  );
}

export default MonthPicker;
