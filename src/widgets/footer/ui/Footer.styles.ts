import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 0 2rem;
  height: ${(props) => props.theme.light.footerHeight};
  background-color: ${(props) => props.theme.light.bgSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.light.border};
`;
