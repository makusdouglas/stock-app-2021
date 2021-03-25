/** @format */

import { Image } from 'antd';
// import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  /* background-blend-mode: soft-light; */
  background-image: url('images/bg/bg-objects.png');
  background-position: bottom right;
  background-size: 1200px;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.box}; 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  /* @media only screen and (max-width: 768px){
    background-size: 100% contain;
    & > aside:first-child {
      display: none;
    }
  }
 @media only screen and (max-width: 1400px){
     
 } */
`;

export const LeftSider = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #eee; */
  max-height: 100vh;
`;
export const ImageStyled = styled(Image)`
  object-fit: scale-down;
  object-position: center;
  height: 100vh;
`;
export const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;

  background-color: #fff;
  box-shadow: 0 0 10px 10px rgba(0,0,0, 0.2);
  max-width: 20rem;
  padding: 18px 20px;


  & > section {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    margin: 10px auto;
    
    padding: 10px;
    font-family: 'Ubuntu', sans-serif;
    div {
      width: 90%;
    }
  }

`;
