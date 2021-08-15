/** @format */

import { Image } from 'antd';
// import { lighten } from 'polished';
import styled from 'styled-components';
import bgblue from '@Assets/images/bg/circle-blues.png';




export const ContainerBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #1890ff, #5271ff);
  display:flex;
  justify-content: center;
`;
export const Container = styled.div`
  /* flex: 1; */
  min-height: 100vh;
  max-height: 100vh;
  max-width: 960px;
  /* background-blend-mode: soft-light; */
  /* background-image: url(${bgblue}); */
  /* background-color: #5271ff; */
  flex: 1;
  display: grid;
  grid-template-columns:  1fr 1fr;
  gap: 6.25rem;
  align-items: center;
  padding: 2rem;
  /* background-blend-mode: color-dodge; */
  /* background-blend-mode: screen;

  background-size: contain;
  background-repeat: repeat; */
  /* display: grid;
  grid-template-columns: 48% 48% 1fr;
  gap: 1rem;
  position: relative; */

  /* @media only screen and (max-width: 1344px) {
    background-size: 100% contain;
    grid-template-areas:
      'crs login'
      'crs login'
      'crs login';
  }
  @media only screen and (max-width: 1000px) {
    background-size: 100% contain;
    grid-template-areas:
      'crs login'
      'crs login'
      'crs login';
  }
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 830px) {
    grid-template-areas:
      'login login'
      'login login'
      'login login';
  } */
`;

export const ImageStyled = styled(Image)`
  object-fit: contain;
  object-position: center;
  min-width: 50vw;
  max-height: 95vh;
  align-self: center;
`;
export const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LeftSide = styled.aside`
display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
align-items: center;
`;
export const TitleApp = styled.aside`
font-size: 3rem;
color: #f5f5f5;
font-weight: 900;

`;

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  padding: 1rem;
  /* margin: 1px; */
  overflow: hidden;
  background-color: #f5f5f5;
  /* border: 4px solid #aaa; */
  /* border: 4px solid ${props => props.theme.colors.primary}; */
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.09);
  max-width: 100%;
  max-height: 100%;
  /* padding: 8px 10px; */

  & > section {
    display: flex;
    flex: 1;
    justify-content: center;
    /* background: linear-gradient(to right, #1890ff, #5271ff); */
    /* background: linear-gradient(
      to right,
      #72efdd 20%,
      #51cce7 20% 40%,
      #2ba4f7 40% 60%,
      #1890ff 60% 80%,
      #5271ff 80%
    ); */

    padding: 20px 0;
    font-family: 'Ubuntu', sans-serif;
    div {
      width: 50%;
    }
  }

  @media only screen and (max-height: 600px) {
    img {
      width: 8rem;
      /* font-size: 10px; */
    }
  }
`;
