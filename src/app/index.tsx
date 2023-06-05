import { ThemeProvider } from 'styled-components';

import CalendarPage from 'pages/calendar';
import { GlobalStyles } from './global.styles';
import { theme } from './config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CalendarPage />
    </ThemeProvider>
  );
}

export default App;
