import { IoMdAdd } from 'react-icons/io';

import { AppButton, AppLogo } from 'shared/ui';
import { HeaderContainer } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <AppLogo />
      <AppButton icon={<IoMdAdd />} />
    </HeaderContainer>
  );
}

export default Header;
