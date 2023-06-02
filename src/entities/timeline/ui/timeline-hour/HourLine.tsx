import { Hour, HourLineContainer, Line } from './HourLine.styles';

type HourLineProps = {
  hour: string;
};

function HourLine({ hour }: HourLineProps) {
  return (
    <HourLineContainer>
      <Hour>{hour}</Hour>
      <Line />
    </HourLineContainer>
  );
}

export default HourLine;
