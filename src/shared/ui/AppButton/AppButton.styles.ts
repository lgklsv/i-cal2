import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px;
  background-color: transparent;
  border-radius: 5px;
  color: ${(props) => props.theme.light.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  text-align: center;
  transition: all 0.15s ease;
  outline: ${(props) => props.theme.light.textPrimary};

  &:hover {
    background-color: ${(props) => props.theme.light.btnHover};
  }

  svg {
    fill: ${(props) => props.theme.light.accentColor};
    color: ${(props) => props.theme.light.accentColor};
    scale: 1.5;
    padding: 2px;

    path {
      color: ${(props) => props.theme.light.accentColor};
    }
  }
`;
