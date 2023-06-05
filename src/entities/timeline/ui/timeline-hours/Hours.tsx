/* eslint-disable react/no-array-index-key */
import { Time, HourContainer } from './Hours.styles';

type HoursProps = {
  timelineHours: {
    hour: string;
    value: number;
  }[];
};

function Hours({ timelineHours }: HoursProps) {
  return (
    <div>
      {timelineHours.map((hourObj, i) => (
        <HourContainer key={i}>
          <Time>{hourObj.hour}</Time>
        </HourContainer>
      ))}
    </div>
  );
}

export default Hours;
