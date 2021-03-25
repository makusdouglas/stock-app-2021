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

  grid-template-areas: 
            "crs login"
            "crs login"
            "crs login"
            "crs footer";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 0,4fr;
  position: relative;

   @media only screen and (max-width: 1344px){
    background-size: 100% contain;
    grid-template-areas: 
            "crs login"
            "crs login"
            "crs login"
            ". footer";
  } 
  @media only screen and (max-width: 1000px){
    background-size: 100% contain;
    grid-template-areas: 
            "crs login"
            "crs login"
            "crs login"
            "footer footer";
  }
  grid-template-columns: 1fr 1fr;
 @media only screen and (max-width: 830px){
  grid-template-areas: 
            "login login"
            "login login"
            "login login"
            "footer footer";
 }
`;

export const LeftSider = styled.aside`
  grid-area: crs;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #eee; */
  max-height: 100vh;
  padding: 20px;

  // Media querys
  @media only screen and (max-width: 830px){
    display: none;
  }
`;
export const ImageStyled = styled(Image)`
  object-fit: contain;
  object-position: center;
  min-width: 50vw;
  max-height: 95vh;
  align-self: center;
`;
export const RightSide = styled.aside`
  grid-area: login;
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

  background-color: #f5f5f5;
  border: 1px solid ${props => props.theme.colors.primary};
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
