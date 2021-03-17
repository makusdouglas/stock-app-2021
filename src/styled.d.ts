/** @format */

// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      body: string;
      text: string;
      buttons: {
        primary: string;
        alert: string;
        danger: string;
        link: string;
        disabled: string;
      };
      title: string;
    };
    sizes: {
      lg_lg: string;
      lg: string;
      md: string;
      sm: string;
      sm: string;
    };
    fontSizes: {
      lg_lg: string;
      lg: string;
      md: string;
      sm: string;
      title: string;
      subtitle: string;
      paragraph: string;
    };
    fonts: {
      title: string;
      subtitle: string;
      paragraph: string;
    };
    media: {
      lg: string;
      md: string;
      sm: string;
    };
  }
  export const ThemeVariables: DefaultTheme = {};
}
