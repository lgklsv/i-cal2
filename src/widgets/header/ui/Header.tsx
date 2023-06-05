import { Calendar } from 'features/calendar';
import { AppLogo } from 'shared/ui';
import { HeaderContainer } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <AppLogo />
      <Calendar.PlusEventBtn />
    </HeaderContainer>
  );
}

export default Header;
