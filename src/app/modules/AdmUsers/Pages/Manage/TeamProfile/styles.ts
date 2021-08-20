/** @format */

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const RowResponsive = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    position: relative;

    button {
      position: absolute;
      right: 7px;
      bottom: 7px;
    }
  }
  @media (max-width: 991px) {
    span button {
      right: 0;
      bottom: 0;
      min-width: 24px;
      min-height: 24px;
      height: 24px;
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span button span {
      font-size: 12px;
    }
  }

  @media (max-width: 767px) {
    span button {
      right: -3px;
      bottom: -3px;
    }
  }
`;
