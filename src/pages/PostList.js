import React from "react";
import styled from "styled-components";
import Post from "../components/Post";

const PostList=(props)=>{

    return(
        <React.Fragment>
            <PostListContainer>
                <h2>오늘의 상품 추천!</h2>     
                <WrapProducts>           
                    <Post/>
                </WrapProducts>
            </PostListContainer>
        </React.Fragment>
    )
}


const PostListMainContainer = styled.div`
  padding-top: 90px; 
  display: flex;
  flex-direction: column;

`;

const PostListContainer=styled.div`
margin:auto;
background:#fff;
height:100vh;
width:1000px;


`;

const Title=styled.h2`

`;

const WrapProducts=styled.div`
// display:flex;
// flex-direction:row;
// flex-wrap:wrap;
// justify-content:space-evenly;
`;

export default PostList;