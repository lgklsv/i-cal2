import { Button } from './AppButton.styles';

type IconPos = 'left' | 'right';

type AppButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPos?: IconPos;
  onClick?: (...args: React.MouseEvent<HTMLElement>[]) => void;
};

function AppButton({
  children,
  icon,
  iconPos = 'right',
  onClick,
}: AppButtonProps) {
  return (
    <Button onClick={onClick}>
      {iconPos === 'left' && icon}
      {children}
      {iconPos === 'right' && icon}
    </Button>
  );
}

export default AppButton;
