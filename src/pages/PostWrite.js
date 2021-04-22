import React, { useEffect, useState } from 'react';

import UploadImage from "../shared/UploadImage";

import { actionCreators as imageActions } from "../redux/modules/image"
import {history} from "../redux/configureStore"

import { useDispatch, useSelector } from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post"
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';

const PostWrite = (props) => {

  const {image_url} = props;
  const dispatch = useDispatch()
  const preview = useSelector((state) => state.image.preview);
  
  //기존 게시물 정보는 리덕스에서 가져올거임.
  //포스트 데이터 가지고 오려는거임.
  const post_list = useSelector((state) => state.post.list);
  const post_id = props.match.params.id; //주소창에서 params로 넘어온거 갖고있음
  const is_edit = post_id ? true : false;  // 수정 중인지, 첫 작성인지 여부 판별
  
  //여기서 포스트리스트꺼 찾을거야
  //수정모드가 아닌 작성모드일 땐 null
  const _post = is_edit? post_list.find((p) => p.id == post_id) : null;
  const [title, setTitle] = useState(_post ? _post.title : "")
  const [price, setPrice]=useState(_post ? _post.price : "")
  const [contents, setContents] = useState(_post ? _post.content : "")
  const [image, setImage] = useState(_post? _post.image : "" )


  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      history.goBack();
      return;
    }

    if (is_edit){
      dispatch(imageActions.setPreview(_post.image_url)) // 페이지가 렌더링 되면서 기존 이미지 같이 렌더링
    } else{
      dispatch(imageActions.setPreview("http://via.placeholder.com/400x300"))
    }
  }, [])

  const ImageError = () => {
    window.alert('잘못된 이미지 주소입니다.😐')

    dispatch(imageActions.setPreview("http://via.placeholder.com/400x300"))
  }

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const changeContents = (e) => {
    setContents(e.target.value)
  }

  const addPost = () => {

    let post = {   
      title: title,
      price: price,
      content: contents,
      image: image,

    }
    console.log(post);
    dispatch(postActions.addPostAPI(post));
    history.replace('/');
    //dispatch(markerActions.addBoard(props.markerId, markerClass ))
    // props.close()
  }

  // 수정된 것을 리듀서-스토어에 디스패치해서 변경된 데이터를 본페이지에서 렌더링 되게 요청
  const editPost = () => {
    if(!contents){
      window.alert("😗빈칸을 채워주세요...ㅎㅎ")
      return;
    }

    let post={
      title: title,
      price: price,
      content: contents,
      image: image,
    }

    dispatch(postActions.editPostAPI(post_id, post)) 
  }


  return (
    <React.Fragment>
      <WriteBackground onClick={props.close} />
      <WriteBox>
        
        <WriteContent>
          <WriteUpload>
            <UploadImage setImage={setImage}/>
          </WriteUpload>
          <WriteImg src={preview ? preview : "http://via.placeholder.com/400x300"}
                onError={ImageError}  />
          <WriteTitle>
            <TextField id="standard-basic" value={title} label="제목" style={{width: "100%"}} onChange={changeTitle} />
          </WriteTitle>
          <WritePrice>
            <TextField id="standard-basic" value={price} label="가격" style={{width: "100%"}} onChange={changePrice} />
          </WritePrice>
          <TextField
                id="outlined-multiline-static"
                label="상품 설명"
                multiline
                rows={3}
                variant="outlined"
                value={contents}
                // title="title"
                // price="price"
                onChange = {changeContents}
              />
          {is_edit ? (
                <WriteSubmit onClick={editPost}>게시글 수정</WriteSubmit>
              ) : (
                <WriteSubmit onClick={addPost}>게시글 작성</WriteSubmit> 
              )}
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

export default PostWrite;



