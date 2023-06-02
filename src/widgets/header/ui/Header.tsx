import { BsPlusLg } from 'react-icons/bs';
import { AppButton, AppLogo } from 'shared/ui';

import { HeaderContainer } from './HeaderContainer.styles';

function Header() {
  return (
    <HeaderContainer>
      <AppLogo />
      <AppButton icon={<BsPlusLg />} iconPos="left" />
    </HeaderContainer>
  );
}

export default Header;
