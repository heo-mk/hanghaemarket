import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post"
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';

const PostWrite = (props) => {
  const dispatch = useDispatch()
 
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()
  const [image, setImage] = useState()
  
  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeContents = (e) => {
    setContents(e.target.value)
  }

  const addPost = () => {
   
    let post = {   
      title: title,
      contents: contents,
      image: image
    }
    console.log(post)
    dispatch(postActions.addPostAX(post))
    //dispatch(markerActions.addBoard(props.markerId, markerClass ))
    props.close()
  }

  return (
    <React.Fragment>
      <WriteBackground onClick={props.close} />
      <WriteBox>
        
        <WriteContent>
          <WriteUpload>
            <ImageInput type="file" placeholder="이미지 등록"/>
          </WriteUpload>
          <WriteImg />
          <WriteTitle>
            <TextField id="standard-basic" value={title} label="제목" style={{width: "100%"}} onChange={changeTitle} />
          </WriteTitle>
          <WritePrice>
            <TextField id="standard-basic" value={title} label="가격" style={{width: "100%"}} onChange={changeTitle} />
          </WritePrice>
          <TextField
                id="outlined-multiline-static"
                label="상품 설명"
                multiline
                rows={3}
                variant="outlined"
                value={contents}
                onChange = {changeContents}
              />
        <WriteSubmit onClick={addPost}>
          게시글 작성
        </WriteSubmit> 
          </WriteContent>
      
      
      </WriteBox>
    </React.Fragment>
  )

}

const WriteBackground = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 30;
  
`
const WriteContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  padding: 55px 0px;
  z-index: 20;
`
const WriteBox = styled.div`
  position: absolute;
  z-index: 40;
  top: 55px;
  left: 50%;
  transform: translate(-50%);
  width: 614px;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  box-sizing: border-box;
  margin: auto;
  background: white;
  padding-bottom: 20px;
  @media (max-width: 614px){
    width: 100vw;
  }
`
const WriteHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`

const WriteHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`

const PostAuthor = styled.div`
  font-size: 18px;
  font-weight: 600;
`
const WriteContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
const WriteUpload = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin-top: 20px;
`
const WriteImg = styled.img`
  width: 100%;
  height: auto;
  margin: 10px 0;
  box-sizing: border-box;
`
const WriteTitle = styled.div`
  width: 50%;
  margin-bottom: 30px;
  margin-left: 15px;
`
const WritePrice = styled.div`
  width: 50%;
  margin-bottom: 30px;
  margin-left: 15px;
`

const WriteSubmit = styled.button`
  margin: auto;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
  background-color: #FFE812;
  color: black;
  padding: 8px 14px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  border: none;
`

const ImageInput=styled.input`
padding-top: 35px
`;

export default PostWrite;



// import React, { useEffect, useState } from 'react'
// import styled from "styled-components";

// import {useDispatch, useSelector} from "react-redux";
// import {actionCreators as postActions} from "../redux/modules/post";
// import {history} from "../redux/configureStore";

// import {actionCreators as imageActions} from "../redux/modules/image"
// //import {actionCreators as postActions} from "../redux/modules/post"

// import TextField from '@material-ui/core/TextField';

// const PostWrite=(props)=>{

//   //이미지 제목 가격 설명
//   const dispatch=useDispatch();

//   const post_id = props.id;
//   const is_edit = post_id ? true : false;
//   const [title, setTitle] = useState(is_edit? props.title:"")
//   const [contents, setContents] = useState(is_edit? props.contents:"")
//   const [image, setImage] = useState()
//   const [price,setPrice]=useState()
  
//   const changeTitle = (e) => {
//     setTitle(e.target.value)
//   }

//   const changeContents = (e) => {
//     setContents(e.target.value)
//   }

//   const addPost = () => {
    
//     let post = {
      
//       image: image,
//       title: title,
//       price: price,
//       contents: contents,
      
//     }
//     console.log(post)
//     dispatch(postActions.addPostAX(post))
//     props.close()
//   }
 
//     return(
//         <React.Fragment>
//             <SellingMainContainer>
//               <SellingContainer>
//                 <SellingWords>판매하기</SellingWords>
                
//                 <WrapInputs>
//                     <ImageBox>
//                         <ImageTitle><h4>이미지</h4></ImageTitle>
//                         <ImageInput type="file" placeholder="이미지 등록"/>
//                     </ImageBox>
                    
//                     <TitleBox>
//                         <Title ><h4>제목</h4></Title>
//                         <TitleInput  placeholder="상품 제목을 입력해주세요."/>
//                     </TitleBox>

//                     <PriceBox>
//                         <Price><h4>가격</h4></Price>
//                         <PriceInput  placeholder="가격을 입력해주세요."/>
//                     </PriceBox>

//                     <ContentsBox>
//                         <Contents><h4>설명</h4></Contents>
//                         <ContentsInput placeholder="상품 설명을 입력해주세요."/>          
//                     </ContentsBox>

//                     <EnrollButtonBox>
//                         <EnrollButton onClick={addPost}>등록하기</EnrollButton>
//                     </EnrollButtonBox>

                
//                 </WrapInputs>
//               </SellingContainer>
//             </SellingMainContainer>
//         </React.Fragment>
//     );
// }

// const SellingMainContainer = styled.div`
//   /* 최상단과 항상 떨어져 있게 함 */
//   padding-top: 100px; 
//   display: flex;
//   flex-direction: column;
//   background-color: #fff;
  
//   /* @media (max-width: 1000px){
//     heigth: 
//   } */
// `;

// const SellingContainer=styled.div`
// height:100vh;
// width:1000px;
// margin:auto;

// `;

// const SellingWords=styled.h2`
// border-bottom: 2px solid rgb(30, 29, 41);
// margin-bottom: 0px;
// height:50px;
// `;

// const WrapInputs=styled.div`
// height:100vh;

// padding-left: 0px;
// `;

// const ImageTitle=styled.div`
// width: 5rem;
// font-size: 18px;
// padding-top: 14px;

// `;

// const ImageBox=styled.div`
// width: 100%;
// display: flex;
// padding: 2rem 0px;
// border-bottom: 1px solid rgb(220, 219, 228);

// `;

// const ImageInput=styled.input`
// padding-top: 35px
// `;

// const Title=styled.div`
// width: 5rem;
// font-size: 18px;
// padding-top: 14px;

// `;
// const TitleBox=styled.div`
// width: 100%;
// display: flex;
// padding: 2rem 0px;
// border-bottom: 1px solid rgb(220, 219, 228);

// `;

// const TitleInput = styled.input`
//   margin-top: 30px;
//   padding: 9px 0px 7px 8px;
//   background-color: #FAFAFA;
//   font-size: 13px;
//   line-height: 18px;
//   width: 250px;
//   color: #262626;
//   border: 1px solid #DBDBDB;
//   outline: none;
//   border-radius: 5px;
//   height: 20px;
//   margin-bottom: 12px;
//   align-items:center;
// `;

// const Price=styled.div`
// width: 5rem;
// font-size: 18px;
// padding-top: 14px;

// `;
// const PriceBox=styled.div`
// width: 100%;
// display: flex;
// padding: 2rem 0px;
// border-bottom: 1px solid rgb(220, 219, 228);

// `;

// const PriceInput = styled.input`
//   margin-top: 30px;
//   padding: 9px 0px 7px 8px;
//   background-color: #FAFAFA;
//   font-size: 13px;
//   line-height: 18px;
//   width: 250px;
//   color: #262626;
//   border: 1px solid #DBDBDB;
//   outline: none;
//   border-radius: 5px;
//   height: 20px;
//   margin-bottom: 12px;
//   align-items:center;
// `;


// const Contents=styled.div`
// width: 5rem;
// font-size: 18px;
// padding-top: 14px;

// `;

// const ContentsBox=styled.div`
// width: 100%;
// display: flex;
// padding: 2rem 0px;
// border-bottom: 1px solid rgb(220, 219, 228);
// `;

// const ContentsInput = styled.input`
//   margin-top: 30px;
//   padding: 9px 0px 7px 8px;
//   background-color: #FAFAFA;
//   font-size: 13px;
//   line-height: 18px;
//   width: 500px;
//   color: #262626;
//   border: 1px solid #DBDBDB;
//   outline: none;
//   border-radius: 5px;
//   height: 20px;
//   margin-bottom: 12px;
// `;

// const EnrollButtonBox=styled.div`
// width: 100%;
// display: flex;
// padding: 2rem 0px;
// justify-content:flex-end;
// margin-right: 20px;
// `;

// const EnrollButton=styled.button`
// margin-right: 20px;

// background-color:#6fa1f6;
// border-radius:30px;

// border:1px solid #6fa1f6;
// width:100px;
// height:30px;
// font-size:15px;
// color:#fff;
// cursor: pointer;
// `;



// ////////////////////

// const WriteBackground = styled.div`
//   position: fixed;
//   top: 0;
//   opacity: 0.4;
//   height: 100vh;
//   width: 100vw;
//   background-color: black;
//   z-index: 30;
  
// `
// const WriteContainer = styled.div`
//   position: absolute;
//   height: 100vh;
//   width: 100vw;
//   top: 0;
//   padding: 55px 0px;
//   z-index: 20;
// `
// const WriteBox = styled.div`
//   position: absolute;
//   z-index: 40;
//   top: 55px;
//   left: 50%;
//   transform: translate(-50%);
//   width: 614px;
//   border: 1px solid #DBDBDB;
//   border-radius: 3px;
//   box-sizing: border-box;
//   margin: auto;
//   background: white;
//   padding-bottom: 20px;
//   @media (max-width: 614px){
//     width: 100vw;
//   }
// `
// const WriteHeader = styled.div`
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0px 30px;
// `

// const WriteHeaderLeft = styled.div`
//   display: flex;
//   align-items: center;
// `

// const PostAuthor = styled.div`
//   font-size: 18px;
//   font-weight: 600;
// `
// const WriteContent = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
// `
// const WriteUpload = styled.div`
//   width: 100%;
//   padding: 10px 20px;
//   margin-top: 20px;
// `
// const WriteImg = styled.img`
//   width: 100%;
//   height: auto;
//   margin: 10px 0;
//   box-sizing: border-box;
// `
// const WriteTitle = styled.div`
//   width: 50%;
//   margin-bottom: 30px;
//   margin-left: 15px;
// `


// const WriteSubmit = styled.button`
//   margin: auto;
//   margin-top: 20px;
//   text-align: center;
//   font-weight: 600;
//   background-color: #FFE812;
//   color: black;
//   padding: 8px 14px;
//   border-radius: 3px;
//   cursor: pointer;
//   outline: none;
//   border: none;
// `

// export default PostWrite;






