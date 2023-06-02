import { BsPlusLg } from 'react-icons/bs';
import { AppLogo } from 'shared/ui';

import { HeaderContainer } from './HeaderContainer.styles';

function Header() {
  return (
    <HeaderContainer>
      <AppLogo />
      <div>
        <BsPlusLg />
      </div>
    </HeaderContainer>
  );
}

export default Header;
