import React from "react";
import styled from "styled-components";

const Main=(props)=>{

    return (
        <React.Fragment>
            <MainMainContainer>
                <WrapTodays>
                    <h2>오늘의 상품 추천</h2>
                    <AllProducts>
                        <OneProducts>
                            <a></a>
                        </OneProducts>
                    </AllProducts>
                </WrapTodays>   
            </MainMainContainer>
        </React.Fragment>
    );
}

const MainMainContainer = styled.div`
  /* 최상단과 항상 떨어져 있게 함 */
  padding-top: 90px; 
  display: flex;
  flex-direction: column;
  /* @media (max-width: 1000px){
    heigth: 
  } */
`;

const WrapTodays=styled.div`
width:1000px;
margin:auto;
background-color:#eee;

& h2 {
    margin-bottom: 1.5rem;
}

`;

const AllProducts=styled.div`

position: relative;
overflow: hidden;
`;

const OneProducts=styled.div`
width: 196px;
margin-right: 11px;
margin-bottom: 11px;
`;
export default Main;