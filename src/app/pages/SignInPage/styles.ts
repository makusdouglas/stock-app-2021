import { Row, Col } from 'antd';
import styled from 'styled-components';

export const Container = styled(Row)`
  flex: 1;
  height: 100%;
  background-color: #fff;


 /* @media only screen and (max-width: 1700px){
     margin: 4rem 5rem;
 }
 @media only screen and (max-width: 1400px){
     margin: 2rem 2rem;
 } */
`;

export const LeftSider = styled(Col)`
    display: flex;
    flex: 1;
    padding: 1rem;
    background-color: #eee;
`;
export const RightSide = styled(Col)`
    display: flex;
    flex: 1;
    padding: 1rem;

`;
