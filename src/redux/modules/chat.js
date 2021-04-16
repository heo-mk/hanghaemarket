// 채팅 데이터를 처리하는 리덕스 모듈 파일.
// 이 파일로 채팅데이터를 서버와 주고 받으며,
// 리덕스에 데이터를 저장해 렌더링하면서 데이터를 보내준다.
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configureStore";

import "moment";
import moment from "moment";

// Actions
// 댓글과는 달리 채팅 글귀는 삭제되거나 수정되지 않는다.
// 그래서 삭제, 수정하는 액션은 만들지 않음.
const SET_CHAT = "SET_CHAT";
const ADD_CHAT = "ADD_CHAT";
const LOADING = "LOADING";

// Action Creators
const setChat = createAction(SET_CHAT, (chat_list) => ({chat_list}));
const addChat = createAction(ADD_CHAT, (chat) => ({chat}));
const loading = createAction(LOADING, (chat) => ({chat}))

const initialState = {
  list : {},
  is_loading: false,
}

// 서버와 채팅 데이터를 주고 받는 미들웨어들
// 채팅한 서버로 보냄 
const addChatAPI = (chat,) => {
  return function (dispatch, getState) {
    
  }
}

const getChatAPI = (chat,) => {
  return function (dispatch, getState) {
    
  }
}

//
export default handleActions(
  {
    [SET_CHAT]: (state, action) => produce(state, (draft) => {
      
    }),
    [ADD_CHAT]: (state, action) => produce(state, (draft) => {
      
    })
  }
)