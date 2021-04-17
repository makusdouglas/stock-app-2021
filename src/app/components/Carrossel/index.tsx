import { Carousel, CarouselProps } from 'antd';
import React from 'react';

// import { Container } from './styles';

const Carrossel: React.FC<CarouselProps> = ({children, ...props}) => {
  return (
    <Carousel {...props}>
    {children}
  </Carousel>
  )
}

export default Carrossel;