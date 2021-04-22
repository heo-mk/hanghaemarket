import React from "react";
import styled from "styled-components";
import PostList from '../pages/PostList';


const Main=(props)=>{
    return (
        <React.Fragment>
            <MainMainContainer>
                <PostList/>     
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

export default Main;