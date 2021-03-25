/** @format */

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  /* background-color: ${props => props.theme.colors.primary}; */
  background-color: var('@layout-header-background');
  background-position: right;
  justify-content: center;
  align-items: center;
`;
