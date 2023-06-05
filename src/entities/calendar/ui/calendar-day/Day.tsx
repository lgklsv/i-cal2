import {
  DayContainer,
  DayDefault,
  DayDefaultToday,
  DaySelected,
  DaySelectedToday,
} from './Day.styles';

type DayProps = {
  children?: React.ReactNode;
  today: boolean;
  selected: boolean;
  onClick?: (...args: React.MouseEvent<HTMLElement>[]) => void;
};

function Day({ children, today, selected, onClick }: DayProps) {
  return (
    <DayContainer>
      {today && !selected && (
        <DayDefaultToday onClick={onClick}>{children}</DayDefaultToday>
      )}

      {today && selected && (
        <DaySelectedToday onClick={onClick}>{children}</DaySelectedToday>
      )}

      {!today && !selected && (
        <DayDefault onClick={onClick}>{children}</DayDefault>
      )}

      {!today && selected && (
        <DaySelected onClick={onClick}>{children}</DaySelected>
      )}
    </DayContainer>
  );
}

export default Day;
