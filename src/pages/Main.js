import React from "react";
import styled from "styled-components";
import PostList from '../pages/PostList';

const Main=(props)=>{

    return (
        <React.Fragment>
            <MainMainContainer>
                {/* <WrapTodays> */}
                  
                    {/* <AllProducts>
                        <OneProducts> */}
                            <PostList/>
                        {/* </OneProducts>
                    </AllProducts> */}
                {/* </WrapTodays>    */}
            </MainMainContainer>
        </React.Fragment>
    );
}

const MainMainContainer = styled.div`
  /* 최상단과 항상 떨어져 있게 함 */
  padding-top: 90px; 
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /* @media (max-width: 1000px){
    heigth: 
  } */
`;

const WrapTodays=styled.div`
width:1000px;
margin:auto;
background-color:#eee;
height:100vh;

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