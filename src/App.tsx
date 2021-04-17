import React, { useState } from 'react';
import { Provider as ReduxStateProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
// import Header from './app/components/HeaderComponent';
import { DefaultRoutes } from './app/routes';
import store, { persistor } from './app/store';

import { GlobalStyle } from './config/GlobalStyle';
import { LightTheme, DarkTheme } from './themes/StyledTheme';
import './App.less';
import { ConfigProvider } from 'antd';
import { PersistGate as PersistReduxStateGate } from 'redux-persist/integration/react';

function App() {


  const [darkMode] = useState<boolean>(false);
  return (
    <ReduxStateProvider store={store}>
      <PersistReduxStateGate persistor={persistor} loading={null}>
        <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <ConfigProvider direction="ltr" >
              <DefaultRoutes />
            </ConfigProvider>
          </BrowserRouter>
        </ThemeProvider>
      </PersistReduxStateGate>
    </ReduxStateProvider>
  );
}

export default App;
