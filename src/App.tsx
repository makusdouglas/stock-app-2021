import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
// import Header from './app/components/HeaderComponent';
import { DefaultRoutes } from './app/routes';

import { GlobalStyle } from './config/GlobalStyle';
import { LightTheme, DarkTheme } from './themes/StyledTheme';
import './App.less';
import AppLayout from './app/Layout';


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {/* <Header darkMode={darkMode}  setDarkMode={setDarkMode}/> */}
        <AppLayout>
          <DefaultRoutes />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
