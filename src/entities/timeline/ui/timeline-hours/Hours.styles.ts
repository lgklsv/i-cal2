import styled from 'styled-components';

export const HourContainer = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Time = styled.span`
  color: ${(props) => props.theme.light.textSecondary};
  justify-self: end;
  font-size: 0.9rem;

  @media (max-width: 414px) {
    font-size: 0.7rem;
  }
`;
