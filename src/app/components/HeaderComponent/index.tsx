/** @format */

import React from 'react';
import { useLocation} from 'react-router-dom';

import { Container, LogoContainer, LinksContainer, StyledLink } from './styles';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
  const themeSwitch = () => {
    setDarkMode(!darkMode)
  }
  const location = useLocation();
  return (
    <Container>
      <LogoContainer>
        <img src="https://cryptologos.cc/logos/electroneum-etn-logo.png" alt="logo"/>
        <h1>AppTitle</h1>
        <hr/>
        <LinksContainer >
          <StyledLink currentLocation={location.pathname} to='/home' >Home</StyledLink >
          <StyledLink currentLocation={location.pathname} to='/profile'>Profile</StyledLink >
        </LinksContainer>
      </LogoContainer>
      <button onClick={themeSwitch}>{darkMode? 'Light': 'Dark'}</button>
    </Container>
  );
};

export default Header;
