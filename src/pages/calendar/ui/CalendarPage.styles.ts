import styled from 'styled-components';

export const CalendarApp = styled.div`
  height: calc(100% - 80px - 70px);
  display: flex;
  flex-direction: column;
`;

export const CalendarContainer = styled.div`
  background-color: #f6f6f6;
  padding-bottom: 2rem;
  padding-left: 0.5rem;
  display: grid;
  grid-template-columns: 0.7fr 9fr;
  gap: 1rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
