import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
// import Header from './app/components/HeaderComponent';
import { DefaultRoutes } from './app/routes';
import store from './app/store';

import { GlobalStyle } from './config/GlobalStyle';
import { LightTheme, DarkTheme } from './themes/StyledTheme';
import './App.less';
import { ConfigProvider } from 'antd';


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <ConfigProvider direction="ltr" >
            <DefaultRoutes />
          </ConfigProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
