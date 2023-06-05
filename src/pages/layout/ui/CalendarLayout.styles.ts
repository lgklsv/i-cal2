import styled from 'styled-components';

export const CalendarLayoutCont = styled.div`
  position: relative;
  max-width: 740px;
  margin: 0 auto;
  height: 100dvh;
  min-height: -webkit-fill-available;
  background-color: ${(props) => props.theme.light.bgPrimary};
  overflow: hidden;
  border-right: 1px solid ${(props) => props.theme.light.border};
  border-left: 1px solid ${(props) => props.theme.light.border};
`;
