/** @format */

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: ${props =>
      props.theme.name === 'dark' ? '#fff' : props.theme.colors.secondary};
  }
`;
