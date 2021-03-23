/** @format */

import styled from 'styled-components';
import { Layout } from 'antd';
const { Sider, Footer } = Layout;

export const SiderStyled = styled(Sider)`
flex: 1;
  /* width: 400px; */
`;

export const FooterStyled = styled(Footer)``;


type MenuTitleProps = {
  collapsed: boolean
}
export const MenuTitle = styled.div.attrs({}) <MenuTitleProps>`
  display: flex;
  padding-left: ${props => props.collapsed ? 0 : 24}px;
  flex-direction: row;

  height: 32px;
  /* margin-bottom: 10px; */
  background: rgba(0,0,0,0.2);

  justify-content: ${props => props.collapsed ? 'center' : 'start'};
  align-items: center;
  
  h4 {
    color: #555;
    font-weight: normal;
    
    margin: 0;
  }
`;