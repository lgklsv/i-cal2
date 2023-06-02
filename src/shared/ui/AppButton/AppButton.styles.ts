import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px;
  background-color: transparent;
  border-radius: 5px;
  color: #ff3130;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #eee;
  }

  svg {
    fill: #ff3130;
  }
`;
