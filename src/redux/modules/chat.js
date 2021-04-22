// // 채팅 데이터를 처리하는 리덕스 모듈 파일.
// // 이 파일로 채팅데이터를 서버와 주고 받으며,
// // 리덕스에 데이터를 저장해 렌더링하면서 채팅을 화면에 보내준다.
// import { createReducer, createAction } from '@reduxjs/toolkit';
// import { handleActions} from "redux-actions";

// import {produce} from "immer";
// import axios from 'axios';
// import {history} from "../configureStore";
// import "moment";
// import moment from "moment";

// // Actions
// const GET_CHAT = 'GET_CHAT';
// const SET_CHAT = "SET_CHAT";
// // const ADD_CHAT = "ADD_CHAT";
// const LOADING = "LOADING";
// const RECEIVE = "RECEIVE";
// const CLEAR_CURRENT_CHAT = 'CLEAR_CURRENT_CHAT';

// // Action Creators
// const getChat = createAction('chat/GETCHAT');
// const getMessages = createAction('chat/GETMESSAGES');
// const setMessages = createAction('chat/SETMESSAGES');
// const writeMessage = createAction('chat/WRITEMESSAGE');
// const clearCurrentChat = createAction('chat/CLEARCURRENTCHAT');

// const initialState = {
//   // 채팅 리스트를 받는 배열.
//   chat_info: [],
//   receive_info: '',

//   // 현재 접속 채팅방
//   currentChat: { 
//     roomId: null, 
//     roomName: null,
//   },
  
//   // 현재 접속한 채팅 메시지
//   message: [],

// }

// // 리듀서S
// const chat = createReducer(initialState, 
//   [getChat]: (state, action) => {
//     state.chateInfo = action.payload;
//   },

//   // [getMessage]: (state, action) => {
//   //   state.messages.push(action.payload);
//   //   state.loading = true;
//   // },

//   // [setMessage]: (state, action) => {
//   //   state.message = action.payload;  
//   // },

//   [clearCurrentChat]: (state, action) => {
//     state.currentChat.roomId = null;
//     state.currentChat.roomName = null;
//   }
// });

// // 채팅방 목록 조회
// // const getChatList = () => async (dispatch, getState, { history }) => {
// //   try {
// //     const response = await chatAPI.getChatList();
// //     dispatch(getChat(response.data));
// //   }
// //   catch (error) {
// //     console.log(error);
// //   }
// // };

// // 채팅방 생성
// const createRoom = (data, closePopup) => async (dispatch, getState, { history }) => {
//   try {
//     const response = await createRoom(data);
//     window.alert('채팅방이 생성되었습니다.')
//     dispatch(getChatList());
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

// // DB에 이미 존재하는 채팅방 메시지들 가져오기
// // const getChatMessage = () => async (dispatch, getState, { history }) => {
// //   try {
// //     const roomId = getState().chat.currentChat.roomId;
// //     const response = await chatAPI.getChatMessage(roomId);
// //     const chatMessageArray = response.data.content;
// //     dispatch(setMessage(chatMessageArray));
// //   }
// //   catch (error) {
// //     console.log(error);
// //   }
// // }

// const actionCreators = {
//   // addChat,
//   // setChat,
//   // addChatAPI,
//   // getChatAPI,
//   // getChatList,
//   getChat,
//   getMessages,
//   setMessages,
//   // writeMessages,
//   clearCurrentChat,
//   getChatList,
//   createRoom,
//   getChatMessage,
// };

// export { actionCreators };