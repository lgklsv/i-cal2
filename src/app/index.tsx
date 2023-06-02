import styled from 'styled-components';
import { NormalizeStyles } from './normailze.styles';

const StyledButton = styled.button`
  color: white;
  padding: 15px 32px;
  text-align: center;
  background-color: #4caf50;
`;

function App() {
  return (
    <>
      <NormalizeStyles />
      <StyledButton type="button">cal</StyledButton>
    </>
  );
}

export default App;
