import styled from 'styled-components';

export const WeekdaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 1rem 0;

  div {
    color: ${(props) => props.theme.light.textSecondary};
  }
`;
