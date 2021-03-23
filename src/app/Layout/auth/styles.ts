import { Content } from 'antd/lib/layout/layout';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh; 
  width: 100vw;
  background-color: #53284F;
`;

export const Box = styled(Content)`
flex: 1;
width: 100%;
height:100%;
padding: 4rem 8rem;

`;
