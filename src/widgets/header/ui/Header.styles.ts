import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0 2rem;
  height: ${(props) => props.theme.light.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
