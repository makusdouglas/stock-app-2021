/** @format */

import { Image } from 'antd';
// import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* flex: 1; */
  /* min-height: 500px; */
  /* min-width: 800px; */
  background-color: ${props => props.theme.colors.primary};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  /* @media only screen and (max-width: 1700px){
     margin: 4rem 5rem;
 }
 @media only screen and (max-width: 1400px){
     margin: 2rem 2rem;
 } */
`;

export const LeftSider = styled.aside`
  display: flex;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  /* background-color: #eee; */
  position: relative;
  max-height: 100vh;
`;
export const ImageStyled = styled(Image)`
  object-fit: scale-down;
  object-position: center;
  padding: 20px;
  height: 100vh;
`;
export const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* position: absolute; */

  & > section {
    display: flex;
    align-items: baseline;
    justify-content: center;

    margin: 10px 20px;
    border-radius: 30px;

    color: #ddd;
    padding: 10px;
    font-family: 'Ubuntu', sans-serif;
    h1 {
      color: #fff;
      font-weight: 500;
    }
  }
`;

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  max-width: 20rem;
  padding: 18px 20px;
`;
