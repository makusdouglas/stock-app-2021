/** @format */

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  a {
    color: ${props =>
    props.theme.name === 'dark' ? '#fff' : props.theme.colors.secondary};
  }
`;
