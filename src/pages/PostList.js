import React from "react";
import styled from "styled-components";

import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";
import {useSelector,useDispatch} from "react-redux";

const PostList = (props) => {
    
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    console.log(post_list); //안나옴

    React.useEffect(() => {
      dispatch(postActions.getMainAPI());

    }, []);

    return(
        <React.Fragment>
            <PostListContainer>
                <Title>오늘의 상품 추천!</Title>     
                <WrapProducts>           
                    {post_list.map((p, idx) => {
                      return <Post key={p.id} {...p}/>
                    })}
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
margin-top: 25px;
`;

const WrapProducts=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content: flex-start;
`;

export default PostList;