import styled from 'styled-components';

export const TimelineContainer = styled.div`
  background-color: #fff;
  padding-left: 0.5rem;
  overflow-y: scroll;
  flex-shrink: 1000;
  display: grid;
  grid-template-columns: 0.7fr 9fr;
  gap: 1rem;
`;

export const Table = styled.div`
  width: 100%;
  margin-top: -1.6rem;
`;

export const TableRow = styled.div`
  height: 50px;
  display: grid;
  border-bottom: 1px solid #eee;
  grid-template-columns: repeat(7, 1fr);

  &:first-child {
    pointer-events: none;
  }

  &:last-child {
    border: none;
    height: 30px;
    pointer-events: none;
  }
`;
