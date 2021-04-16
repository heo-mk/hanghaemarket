import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Carousel = (props) => {
    const container = React.useRef();
    const slider_container = React.useRef();

    const [banner, setBanner] = React.useState([]);
    
    React.useEffect(() => {
      //정보 가져오기
      axios.get('http://54.180.113.24/banner').then((res)=>{
          setBanner(res.data);
      }).catch((err)=>{
          console.log(err);
      });
  }, []);

    return(
        <React.Fragment>
          <CarouselMainContainer>
            <CarouselContainer ref={container}>
              <SlideContainer ref={slider_container}>
                {banner.map((val, index)=>{
                    let value = index * 100;
                    let url = `url(${val.image}) no-repeat center`;
    
                    const slide_style = {
                        left: `${value}%`,
                        background: `${url}`,
                        backgroundSize: 'cover',
                      };

                    return (
                      <Slide className='slide' key={index} style={slide_style} href={val.link} target='_blank' />
                    );

                })}
              </SlideContainer>
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

const SlideContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    transition: left .3s ease-in;
`;

const Slide = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 15px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
`;


export default Carousel;