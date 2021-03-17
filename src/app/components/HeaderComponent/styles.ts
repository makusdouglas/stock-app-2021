/** @format */

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  max-width: 100vw;
  min-height: 2.6rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  button {
    border: 0;
    padding: 0.6rem;
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => (props.theme.name === 'light' ? '#fff' : '#212121')};
    :focus {
      border: 1px solid ${props => props.theme.colors.primary};
      outline: none;
    }
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 2.5rem;
    width: 2.5rem;
  }
  h1 {
    margin-left: 0.5rem;
    color: #fff;
  }

  hr {
    margin: 0 1rem;
    height: 1.5rem;
    border: 1px solid ${props => props.theme.colors.secondary};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface StyledLinkProps {
  readonly currentLocation?: string;
}
export const StyledLink = styled(Link)<StyledLinkProps>``;
