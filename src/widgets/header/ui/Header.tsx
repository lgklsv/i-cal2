import { IoMdAdd } from 'react-icons/io';

import { AppButton, AppLogo } from 'shared/ui';
import { HeaderContainer } from './HeaderContainer.styles';

function Header() {
  return (
    <HeaderContainer>
      <AppLogo />
      <AppButton icon={<IoMdAdd />} />
    </HeaderContainer>
  );
}

export default Header;
