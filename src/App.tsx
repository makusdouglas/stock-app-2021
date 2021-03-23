import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
// import Header from './app/components/HeaderComponent';
import { DefaultRoutes } from './app/routes';

import { GlobalStyle } from './config/GlobalStyle';
import { LightTheme, DarkTheme } from './themes/StyledTheme';
import './App.less';
import { ConfigProvider } from 'antd';


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ConfigProvider direction="ltr" >
          <DefaultRoutes />
        </ConfigProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
