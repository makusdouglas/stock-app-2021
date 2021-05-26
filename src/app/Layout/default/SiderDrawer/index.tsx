import React from 'react';
import { Drawer, Layout } from 'antd'
import { set } from 'immer/dist/internal';
import { SiderStyled } from '../styles';
import './index.less'

interface SiderDrawerProps {
    visible: boolean;
    toggleVisibility: (e: boolean) => void;
    placement: 'left' | 'right' | 'top' | 'bottom'
}
const SiderDrawer: React.FC<SiderDrawerProps> = ({visible, placement, toggleVisibility ,children}) => {
    const onClose = () => {
        toggleVisibility(!visible);
    }
  return (
      <Drawer
      className='sider-drawer-class'
      placement={placement}
      closable={true}
      width={200}
      onClose={onClose}
      visible={!visible}
      key={'sider'}
    >
        <SiderStyled 
            width={200}
            trigger={null}
        >
            {children}
        </SiderStyled>
    </Drawer>
  );
}

export default SiderDrawer;