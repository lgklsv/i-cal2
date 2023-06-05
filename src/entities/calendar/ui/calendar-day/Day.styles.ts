import styled from 'styled-components';

export const DayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayDefault = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px;
  height: 35px;
  width: 35px;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${(props) => props.theme.light.dayHover};
  }
`;

export const DayDefaultToday = styled(DayDefault)`
  time {
    color: ${(props) => props.theme.light.accentColor};
  }
`;

export const DaySelected = styled(DayDefault)`
  background-color: ${(props) => props.theme.light.textPrimary};

  time {
    color: ${(props) => props.theme.light.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.light.textPrimary};
  }
`;

export const DaySelectedToday = styled(DayDefault)`
  background-color: ${(props) => props.theme.light.accentColor};

  time {
    color: ${(props) => props.theme.light.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.light.accentColor};
  }
`;
