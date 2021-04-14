/** @format */

import { Image } from 'antd';
// import { lighten } from 'polished';
import styled from 'styled-components';
import bgblue from '@Assets/images/bg/circle-blues.png';

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  /* background-blend-mode: soft-light; */
  background-image: url(${bgblue});
  background-size: contain;
  background-repeat: repeat;
  background-color: ${props => props.theme.colors.box};
  display: flex;
  position: relative;

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

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  /* margin: 1px; */
  overflow: hidden;
  background-color: #f5f5f5;
  /* border: 4px solid #aaa; */
  /* border: 4px solid ${props => props.theme.colors.primary}; */
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  max-width: 17.5rem;
  max-height: 90%;
  /* padding: 8px 10px; */

  & > section {
    display: flex;
    flex: 1;
    justify-content: center;
    background-color: #1890ff;
    padding: 20px 0;
    font-family: 'Ubuntu', sans-serif;
    div {
      width: 90%;
    }
  }

  @media only screen and (max-height: 600px) {
    img {
      width: 8rem;
      /* font-size: 10px; */
    }
  }
`;
