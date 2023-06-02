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
    background-color: rgb(229 231 235);
  }
`;

export const DayDefaultToday = styled(DayDefault)`
  time {
    color: #ff3130;
  }
`;

export const DaySelected = styled(DayDefault)`
  background-color: #030303;

  time {
    color: #fff;
  }

  &:hover {
    background-color: #030303;
  }
`;

export const DaySelectedToday = styled(DayDefault)`
  background-color: #ff3130;

  time {
    color: #fff;
  }

  &:hover {
    background-color: #ff3130;
  }
`;
