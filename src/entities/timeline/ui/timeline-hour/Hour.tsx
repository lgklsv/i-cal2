import { Time, HourContainer } from './Hour.styles';

type HourProps = {
  hour: string;
};

function Hour({ hour }: HourProps) {
  return (
    <HourContainer>
      <Time>{hour}</Time>
    </HourContainer>
  );
}

export default Hour;
