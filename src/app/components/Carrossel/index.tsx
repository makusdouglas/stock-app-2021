import { Carousel, CarouselProps, Image } from 'antd';
import React from 'react';

// import { Container } from './styles';


const contentStyle : React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
 


const Carrossel: React.FC<CarouselProps> = ({children, ...props}) => {
  return (
    <Carousel {...props}>
    {children}
  </Carousel>
  )
}

export default Carrossel;