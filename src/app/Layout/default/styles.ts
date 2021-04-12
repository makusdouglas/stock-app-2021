/** @format */

import styled from 'styled-components';
import { Layout, Space, Button } from 'antd';
const { Sider, Footer } = Layout;


export const SiderStyled = styled(Sider)`
flex: 1;
  /* width: 400px; */
`;

export const FooterStyled = styled(Footer)``;

type MenuTitleProps = {
  collapsed: boolean
}
export const MenuUserInfo = styled.div.attrs({}) <MenuTitleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: ${props => props.collapsed ? 40 : 90}px;
  background: rgba(0,0,0,0.4);
  /* padding: 10px 0; */
  padding-left: ${props => props.collapsed ? 24 : 18}px;

  h4, h6 {
    color: #DDD;
  }
  & .ant-avatar {
    background: rgba(255,255,255,0.25);
  }
`;
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
    color: #999;
    font-weight: normal;
    
    margin: 0;
  }

  `;
// Config Popup header
export const UserPopupHeader = styled.div`
  background-color: ${props => props.theme.colors.primary};
  min-height: 50px;
  position: relative;
  display: flex;
  align-items: center;
`;
export const UserPopupBody = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  
`; export const UserPopupFooter = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

`;

// Space in header user options
export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: row;
  & > .ant-space-item {
    display: flex;
  }
`;

export const IconButton = styled(Button)`
  background: none;
  padding: 0;
  border: 0;
  min-width: 0;
  width: 20px;
  height: 20px;
  svg {
    transition: color 0.3s linear;
    color: #ddd;

  }
  &:active, :hover, :focus {
    background: none;
    svg {
      color: #fff;
    }
  }

`;