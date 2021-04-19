import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

const Post = (props) =>{

    return(
    
        //Grid안의 것들이 children으로 넘어감
        <React.Fragment>
          <Link style={{textDecoration:"none"}} to ="/upload">
          <Grid border="1px solid #eee" width="230px"  margin-right="11px" margin-bottom="11px"> 
            <Grid padding="16px">
                <Image src={props.src}/>      
            </Grid>
            <Grid padding="16px">
              <Text bold size="14px">{props.title}</Text>
            </Grid>
            <Grid padding="0px 16px">
                <Text bold size="22px" margin="0">{props.price}</Text>
                <Text>{props.insert_dt}</Text>

            </Grid>
          </Grid>
          </Link>
        </React.Fragment>
    );

}

Post.defaultProps={
    
    imgUrl:"https://jieunpic.s3.ap-northeast-2.amazonaws.com/watch6.jpg",
    title:"애플워치 스테인리스 싸게 팝니다.",
    price:"110,000원",
    insert_dt:"2021-03-12 10:00:00",
    
};

export default Post;