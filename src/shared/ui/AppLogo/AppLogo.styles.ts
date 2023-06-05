import styled from 'styled-components';

export const LogoText = styled.h1`
  font-weight: lighter;
`;

export const LogoActiveText = styled.span`
  color: ${(props) => props.theme.light.accentColor};
`;
