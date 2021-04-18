//여기서 하고 싶은 것:
//PostWrite.js에서 상품 이미지, 제목, 가격을 적으면
//리듀서에서 상태값을 받아오게 하는거
import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from 'axios';
import {history} from "../configureStore";
import "moment";
import moment from "moment";

//Actions
const ADD_POST = "ADD_POST";  // 상품 정보 추가하기
const SET_POST = "SET_POST";  // Post들 가져와서 화면에 뿌리기
const EDIT_POST = "EDIT_POST";  // Post 수정 
const DELETE_POST= "DELETE_POST";  // Post 삭제

//ActionCreaters
//타입, 파라미터 넘겨준거 적기
const addPost = createAction(ADD_POST, (post) => ({post}));
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const editPost = createAction(EDIT_POST, (post, post_id) => ({post, post_id}));
const deletePost = createAction(DELETE_POST, (post_id) => ({post_id}));


//initialStates
const initialState={
  list : [],
};

const initialPost={
    id: 0,
    seller_id: "",
    image_url: "https://jieunpic.s3.ap-northeast-2.amazonaws.com/watch6.jpg",
    title:"애플워치 스테인리스 싸게 팝니다.",
    price:"110,000원",
    content: "",
    // insert_dt: "2021-03-12 10:00:00",
    
};

// 미들웨어
// 클라이언트가 입력한 상품 정보를 서버에다 저장한다.
const addPostAPI = (post) => {
  return function (dispatch, getState) {

  // 데이터를 JSON 형식으로 준비
  const formData = new FormData();
  formData.append('images', post.images); //이름을 image가 아니라 file로 보내기?
  formData.append('title', post.title);
  formData.append('price', post.price);
  formData.append('content', post.content);

  const _token = loginStorage.getState("Authorization");
  let token = {
    headers : { Authorization: `${_token}`}
  }

  const API = 'http://dmsql5303.shop/boards';
  axios.post(API, formData, token)
    .then((response) => {
      console.log(response.data)
      if(response.data === "true") {
        window.alelrt("상품게시물 저장 완료!")
      }
      
      // boardId = response.data.boardId; 백엔드와 이거 논의
      // dispatch(getPostAPI(boardId)); 논의가 되면 이거까지 살린다.
      // dispatch(deletePostAPI(boardId)), 이건 하지 않는다.
      // dispatch(imageActions.setPreview("http://via.placeholder.com/400x300"));
      // disaptch(addPost(post_list));
      history.replace("/");
    }).catch((error) => {
      console.log(error)
      window.alert("상품게시물을 저장하지 못했습니다.")
    })
  } 
}

// 서버에 있는 상품 데이터를 가져온다.
const getPostAPI = (boardId) => {
  return function (dispatch, getState) {
    
    const API = `http://dmsql5303.shop/boards/${boardId}/details`;
    axios.get(API)
      .then((response) => {
        console.log(response.data);

        let post_list = [];
        response.data.forEach((_post) => {

        let post = {
          // id: _post.id,
          // id: boardId, 상품게시물의 id, 백엔드와 논의 되면 이걸 살리면 됨. API URL 용도
          seller_id: _post.userId,  // 작성자 id, 노션에는 response에 작성자 정보가 없음.
          // 수정할 때 변경할 데이터는 아래 네가지
          image_url: _post.imageUrl,
          title: _post.title,
          price: _post.price,
          content: _post.content,
        }
        
        post_list.unshift(post); // 최신순으로 포스트가 정렬되게 unshift로 한다.
      })
      console.log(post_list);
      dispatch(setPost(post_list));
    }).catch((error) => {
      window.alert("상품게시물을 가져오지 못했습니다.");
      console.log(error);
    })
  }
}

// 상품 게시물을 수정한다.
// 서버측의 데이터를 수정하고, 리덕스에서도 수정해서 화면에 렌더링 되게 한다.
const editPostAPI = (boardId, post) => {
  return function (dispatch, getState) {
    if (!boardId) {
      console.log("게시물이 없습니다!");
      return;
    }
    const _image = getState().image.preview;
    const _post_idx = getState().post.list.findIndex((p) => p.id === boardId);
    const _post = getState().post.list[_post_idx];

    if(_image === _post.product_image) {  // 같은 이미지라면
      const formData = new formData();
      // formData.append('images', post.images);
      formData.append('title', post.title);
      formData.append('price', post.price);
      formData.append('content', post.content);

      const _token = loginStorage.getState("Authorization");
      let token = {
        headers : { Authorization: `${_token}`}
      }
    
      console.log(post)
      const API = `http://dmsql5303.shop/boards/${boardId}`;
      axios.put(API, formData, token)
        .then((response) => {
          console.log(response.data);
          let post_info = {
            title: post.title,
            price: post.price,
            content: post.content,
          }
          dispatch(editPost(post_info, boardId))  // 리덕스에서도 수정하기.

        }).catch((error) => {
          console.log(error);
          window.alert("상품게시물이 수정되지 않았습니다.")
        })
        return;
      
      } else {
        const formData = new formData();
        formData.append('images', post.images);
        // formData.append('imgUrl', post.imgUrl);
        formData.append('title', post.title);
        formData.append('price', post.price);
        formData.append('content', post.content);
        
        const _token = loginStorage.getState("Authorization");
        let token = {
        headers : { Authorization: `${_token}`}
        }
    
        console.log(post)
        const API = `http://dmsql5303.shop/boards/${boardId}`;
        axios.put(API, formData, token)
          .then((response) => {
            console.log(response.data);
            let post_info = {
              image_url: response.data.imageUrl,
              title: post.title,
              price: post.price,
              content: post.content,
            }
            dispatch(editPost(post_info, boardId))  // 리덕스에서도 수정하기.

          }).catch((error) => {
            console.log(error);
            window.alert("상품게시물이 수정되지 않았습니다.")
          })
        }
      }
}

// 상품 게시물 삭제하기.
// 서버에서도 삭제하고, 리덕스에서도 데이터를 삭제한다.
const deletePostAPI = (boardId) => {
  return function (dispatch, getState) {
    
  const _token = loginStorage.getState("Authorization");
  let token = {
    headers : { Authorization: `${_token}`}
  }

  const API = `http://dmsql5303.shop/boards/${boardId}`;
  axios.delete(API, token)
    .then((resonse) => {
      console.log(response.data);
      dispatch(deletePost(boardId));
    })
  }
}


//Reducer
export default handleActions({
    //원본값, 원본값으로 어떤 작업을 하고 싶은지 
    //draft: 원본값 복사한 값
    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post)
    }),

    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list.push(...action.payload.post_list);
      console.log(draft.list);
      draft.list = draft.list.reduce((acc, cur) => {
        if(acc.findIndex(a => a.id == cur.id) === -1) {   // 여기서 id는 getPostAPI에서 가져온 id: boardId 이거다.
          return [...acc, cur];
        } else {
          acc[acc.findIndex((a) => a.id === cur.id)] = cur;
          return acc;
        }
      }, [])
    }),

    [EDIT_POST]: (state, action) => produce(state, (draft) => {
      let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
      draft.list[idx] = {...draft.list[idx], ...action.payload.post}
    }),
    
    [DELETE_POST]: (state, action) => produce(state, (draft) => {
      draft.list = draft.list.filter((r, idx) => {
        if(r.id !== action.payload.id){
          console.log(r.id);
          return [...draft.list, r];
        }
      })
    }),
  },
  initialState
);

//action creator export
const actionCreators={
    setPost,
    addPost,
    editPost,
    deletePost,
    addPostAPI,
    getPostAPI,
};

export { actionCreators };