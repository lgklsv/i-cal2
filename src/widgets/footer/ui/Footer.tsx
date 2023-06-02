import { useDispatch } from 'react-redux';

import { setToday } from 'store/reducers/CalendarSlice';
import { AppButton } from 'shared/ui';
import { FooterContainer } from './Footer.styles';

function Footer() {
  const dispatch = useDispatch();

  const setTodayHandler = () => {
    dispatch(setToday());
  };

  return (
    <FooterContainer>
      <AppButton onClick={setTodayHandler}>Today</AppButton>
    </FooterContainer>
  );
}

export default Footer;
