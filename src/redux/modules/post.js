//여기서 하고 싶은 것:
//PostWrite.js에서 상품 이미지, 제목, 가격을 적으면
//리듀서에서 상태값을 받아오게 하는거

import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from 'axios';
import {history} from "../configureStore";

//Actions

//Post 정보 가져오기
const SET_POST="SET_POST";
//상품 정보 추가하기
const ADD_POST="ADD_POST";

//ActionCreaters
//타입, 파라미터 넘겨준거 적기
const setPost=createAction(SET_POST,(post_list)=> ({post_list}));
const addPost=createAction(ADD_POST,(post)=> ({post}));


//initialStates
const initialState={
    list:[],

};

const initialPost={
    id:0,
    imgUrl:"https://jieunpic.s3.ap-northeast-2.amazonaws.com/watch6.jpg",
    title:"애플워치 스테인리스 싸게 팝니다.",
    price:"110,000원",
    insert_dt:"2021-03-12 10:00:00",
    
};

//middleware actions
// const addAction=(title)=>{
//     return function (dispatch,getState,{history}){
//         console.log(history);
//         dispatch(addAction(title));
//         history.push('/');
//     }
// }

//Reducer
export default handleActions({
    //원본값, 원본값으로 어떤 작업을 하고 싶은지 
    //draft: 원본값 복사한 값
    [SET_POST]:(state,action)=>produce(state,(draft)=>{
        // draft.img=action.payload.img;
        // draft.title=action.payload.title;
        // draft.price=action.payload.price;
    }),
    [ADD_POST]:(state,action)=>produce(state,(draft)=>{
        // draft.list.unshift(action.payload.post)
    }),
},initialState);

//action creator export
const actionCreators={
    setPost,
    addPost,
  
};

export {actionCreators};