import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 16px;
}

:root, html, body{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.text};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


`;