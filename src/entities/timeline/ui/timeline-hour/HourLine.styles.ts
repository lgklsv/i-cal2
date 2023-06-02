import styled from 'styled-components';

export const HourLineContainer = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 0.7fr 9fr;
  gap: 1rem;
  align-items: center;
  // TODO media queries for column sizes
`;

export const Hour = styled.span`
  color: #6b7280;
  justify-self: end;
  font-size: 0.9rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
`;
