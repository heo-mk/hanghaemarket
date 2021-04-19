import React, {useEffect, useState} from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";


import ModalForChange from "../components/ModalForChange";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { actionCreators as postActions } from "../redux/modules/post";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom";

const Post = (props) =>{
  
  const {image_url, title, price,content, id} = props;

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const is_me = useSelector((state) => state.user.user.user_id);  // 로그인한 사용자. 
  const user_info = useSelector((state) => state.user.user);
  const [ is_changemodal, setChangeModal] = useState();

  const openChangeModal = () => {
    setChangeModal(true);
  };

  const goDetail = () => {
    history.replace("/boards/details/");
  }

    return(
    
        //Grid안의 것들이 children으로 넘어감
        <React.Fragment>
          {/* <Link style={{textDecoration:"none"}} to ="/upload"> */}
          <Grid onClick={goDetail} border="1px solid #eee" width="230px"  margin-right="11px" margin-bottom="11px"> 
          {props.id === is_me?
                  <MoreHorizIcon height="14px" width="14px" cursor="pointer" onClick={openChangeModal}/> 
                  : null}
            <Grid padding="16px">
                <Image src={props.image_url}/>      
            </Grid>
            <Grid padding="16px">
              <Text bold size="14px">{props.title}</Text>
            </Grid>
            <Grid padding="0px 16px">
                <Text bold size="22px" margin="0">{props.price}</Text>
            </Grid>
            <Grid>
               <Text bold size="14px">{props.content}</Text>
            </Grid>
          </Grid>
          {/* </Link> */}
        </React.Fragment>
    );

}

Post.defaultProps={
    
    image_url:"https://jieunpic.s3.ap-northeast-2.amazonaws.com/watch6.jpg",
    title:"애플워치 스테인리스 싸게 팝니다.",
    price:"110,000원",
    content: "교환, 환불 어렵습니다.",
    //insert_dt:"2021-03-12 10:00:00",
    id:"",
    
};

export default Post;