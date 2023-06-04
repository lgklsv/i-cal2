import styled from 'styled-components';

export const TableCellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #eee;
  padding: 2px;
  transition: all 0.15s ease;
  cursor: pointer;

  &:first-child {
    border-left: none;
  }
`;

export const TableCellDefault = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    background-color: #ebecff;
  }
`;

export const TableCellWithTask = styled(TableCellDefault)`
  background-color: #ebecff;
`;

export const TableCellWithTaskSelected = styled(TableCellDefault)`
  background-color: #b3b7ff;

  &:hover {
    background-color: #b3b7ff;
  }
`;
