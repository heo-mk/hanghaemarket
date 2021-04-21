import React from "react";
import styled from "styled-components";

const Image =(props)=>{

    const {shape, src, size} = props;

    const styles={
        shape:shape,
        src:src,
        size:size,
 
    }
    return(
        <React.Fragment>
            <ImageBox {...styles}></ImageBox>
        </React.Fragment>
    );
}

Image.defaultProps = {
    shape: "rectangle",
    src: "https://jieunpic.s3.ap-northeast-2.amazonaws.com/watch6.jpg",
    size: 200,
   
}


const ImageBox=styled.div`
background-image: url("${(props) => props.src}");
background-size: cover;
width:200px;
height:200px;
`;

export default Image;