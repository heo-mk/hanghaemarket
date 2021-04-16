import React from "react";
import styled from "styled-components";

const Selling=(props)=>{

    return(
        <React.Fragment>
            <SellingMainContainer>
                <NavBar>
                    <a>상품 등록</a>
                    <a>상품 관리</a>
                    <a>구매/판매 내역</a>
                </NavBar>
            </SellingMainContainer>
        </React.Fragment>
    );
}

const SellingMainContainer = styled.div`
  /* 최상단과 항상 떨어져 있게 함 */
  padding-top: 100px; 
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /* @media (max-width: 1000px){
    heigth: 
  } */
`;

const NavBar=styled.div`

`;

export default Selling;