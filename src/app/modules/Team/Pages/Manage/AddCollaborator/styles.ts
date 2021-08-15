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
