import styled from 'styled-components';

export const TimelineCellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${(props) => props.theme.light.border};
  padding: 2px;
  transition: all 0.15s ease;
  cursor: pointer;

  &:first-child {
    border-left: none;
  }
`;

export const TimelineCellDefault = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    background-color: ${(props) => props.theme.light.eventCell};
  }
`;

export const TimelineCellWithTask = styled(TimelineCellDefault)`
  background-color: ${(props) => props.theme.light.eventCell};
`;

export const TimelineCellWithTaskSelected = styled(TimelineCellDefault)`
  background-color: ${(props) => props.theme.light.eventCellActive};

  &:hover {
    background-color: ${(props) => props.theme.light.eventCellActive};
  }
`;
