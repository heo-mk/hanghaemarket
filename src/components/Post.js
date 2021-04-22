import React, {useEffect, useState} from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

import styled from "styled-components"

import ModalDetail from "../components/ModalDetail";
import ModalForChange from "../components/ModalForChange";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { actionCreators as postActions } from "../redux/modules/post";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom";


const Post = (props) =>{
  
  const {image_url, title, price, content, id, seller_id} = props;


  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const is_me = useSelector((state) => state.user.user.uid);  // 로그인한 사용자. 
  const user_info = useSelector((state) => state.user.user);
  
  const [ is_modal, setDetailModal ] = useState();
  const [ is_changemodal, setChangeModal] = useState();
  
  const BoardId=props.id;


  const openDetailModal = () => {
    setDetailModal(true);
  };

  const closeDetailModal = () => {
    setDetailModal(false);
  };

  const openChangeModal = () => {
    setChangeModal(true);
    
  };

  const closeChangeModal = () => {
    setChangeModal(false);
  };

  const goDetail = () => {

    // dispatch(postActions.getPostAPI(BoardId));
    //dispatch(postActions.getHeartAPI(BoardId));//살렸음
    // history.replace("/boards/details/");
    history.push(`/boards/details/${BoardId}`);
  }

    return(
    
        //Grid안의 것들이 children으로 넘어감
        <React.Fragment>
          {/* #6fa1f6 */}
          <Grid bg="#ebf2f5" border="1px solid" width="230px"  margin="0 11px 30px 0"> 
          <WrapModal>
            {props.seller_id == is_me?
                  <MoreHorizIcon height="14px" width="14px" cursor="pointer" onClick={openChangeModal}/> 
                  : null}
          </WrapModal>
              
            <ImgDiv onClick={goDetail}>
              {/* <Image src={props.image_url}/> */}
              <Image src={props.image_url}/>
            </ImgDiv>               
            <TextDiv>
              <Text bold size="16px">{props.title}</Text>
              <Text bold size="22px" margin="0">{props.price}원</Text>
              <Text bold size="14px">{props.content}</Text>
            </TextDiv>    
          </Grid>

          
            {/* 모든 요소들의 밖에서 상세페이지 모달, 수정/삭제 모달을 제어 */}
          {is_modal ? <ModalDetail close={closeDetailModal} {...props} user_info={user_info}  is_me={is_me} openChangeModal={openChangeModal}  />        
          : null}
          {is_changemodal ? <ModalForChange close={closeChangeModal} {...props}/>        
          : null}
        </React.Fragment>
    );

}

Post.defaultProps = {
    image_url:"https://jieunpic.s3.ap-northeast-2.amazonaws.com/watch6.jpg",
    title:"애플워치 스테인리스 싸게 팝니다.",
    price:"110,000원",
    content: "교환, 환불 어렵습니다.",
    //insert_dt:"2021-03-12 10:00:00",
    id:"",
    seller_id: "",
};

const WrapPost=styled.div`

width: 230px;  
margin-right: 11px; 
margin-bottom: 20px;
border-radius: "30px";

`;

const WrapModal=styled.div`
margin-left: 200px;
height:10px;
`;

const ImgDiv=styled.div`
cursor: pointer;
padding-left: 16px;
padding-top: 16px;
`;

const TextDiv=styled.div`
padding-left: 16px;
padding-top: 16px;

`;



export default Post;