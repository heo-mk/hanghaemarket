import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Carousel = (props) => {
    const container = React.useRef();


    return(
        <React.Fragment>
          <CarouselMainContainer>
            <CarouselContainer ref={container}>

            </CarouselContainer>
          </CarouselMainContainer>
        </React.Fragment>
    );

    
}

const CarouselMainContainer = styled.div`
  /* 최상단과 항상 떨어져 있게 함 */
  padding-top: 90px; 
  display: flex;
  flex-direction: column;
  background-color: beige;
  height:300px;
  /* @media (max-width: 1000px){
    heigth: 
  } */
`;

const CarouselContainer = styled.div`
    margin:auto;
    width: 1200px;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    background-color:pink;
`;


export default Carousel;