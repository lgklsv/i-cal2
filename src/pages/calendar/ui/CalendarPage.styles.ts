import styled from 'styled-components';

// prettier-ignore
export const CalendarApp = styled.div`
  height: calc(100% - ${(props) => props.theme.light.headerHeight} - ${(props) => props.theme.light.footerHeight});
  display: flex;
  flex-direction: column;
`;

export const CalendarContainer = styled.div`
  background-color: ${(props) => props.theme.light.bgSecondary};
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  display: grid;
  grid-template-columns: 0.7fr 9fr;
  gap: 1rem;
  border-top: 1px solid ${(props) => props.theme.light.border};
  border-bottom: 1px solid ${(props) => props.theme.light.border};
`;

export const Placeholder = styled.div`
  min-width: 51px;
  @media (max-width: 414px) {
    min-width: 39px;
  }
`;
