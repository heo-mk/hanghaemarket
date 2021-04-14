// 회원가입, 로그인 데이터를 사용하는 리덕스 모듈.
import axios from "axios"  // 서버 통신용 패키지 axios
import {createAction, handleActions} from "redux-actions";
import { produce } from "immer";
import { history } from "../configureStore";

// Action 선언
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

// Action Creators
const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

// 초기 스테이트 : initial State
const initialState = {
  user: {
    username: "",
    password: "", 
    email: "", 
    city: "",
    street: ""
  },
  is_login: false,
  token: false,
}

// middleware : 백엔드 서버와 비동기 통신을 하기 위한 미들웨어
// 액션 디스패치(컴포넌트에서 리덕스로 데이터 변경 요청)
// -> 미들웨어가 서버와 데이터 통신(요청-응답)
// -> 그렇게 리덕스로 가져온 데이터를 리듀서가 처리.
// 미들웨어는 redux-thunk 패키지로 설치 : configureStore.js에서 설정됨
// 컴포넌트에서 액션 객체가 생성되어 리덕스로 디스패치 되기 전에
// 미들웨어는 조건을 주거나, 행동을 사전에 처리 한다.
// 그래서 미들웨어는 서버와 데이터를 주고 받는(요청-응답)을 
// 먼저 처리 해서 컴포넌트로 데이터를 가져온다.
// 위 지식의 출처는 리액트 기본주차 5주차 강의 자료

// 회원가입 미들웨어
const signupAPI = (email, password, username, city, street) => {
  return function (dispatch, getState, {history}) {
    // if(!profile_url){
    //   profile_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjZn8mOw7F4rtWWKbEIIHOr_w_GAeHiXPgA&usqp=CAU"
    // }

    axios.post("http://dmsql5303.shop/signups", {
      // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
      // 회원가입창에서 클라이언트가 입력하는 데이터
      email: email,           
      password: password,  // 숫자, 영어 대문자, 소문자, 특수기호, 8-20자
      username: username,  // id개념, 한글이 아니라 영어로 보내기, 영어+숫자, 4-12글자
      city: city,           
      street: street,
    })
      // 그러면 서버에서 클라이언트로 response(응답)으로 true가 온다.
    .then((response) => {
      console.log(response.data)
      history.replace('/logins')
    }).catch((error) => {
      window.alert('회원가입이 정상적으로 이뤄지지 않았습니다.')
    })
  }
}

// 로그인 요청(request, 클라이언트->서버) 미들웨어
const loginAPI = (email, password) => {
  return function (dispatch, getState) {
    axios.post("http://dmsql5303.shop/login", {
      // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
      // 로그인창에서 클라이언트가 입력하는 데이터
      email: email,
      password: password,
    })
    // 그러면 서버에서 클라이언트로 response(응답)으로 token(JWT)이 온다.
    .then((response) => {
      let token = response.data
      console.log(response.data)
      localStorage.setItem("token", token)
      dispatch(setUser(token))
      history.replace('/logins')
    }).catch((error) => {
      window.alert('로그인에 실패했습니다')
      console.log(error)
    })
  }
}

// // 로그인 응답(response, 서버 -> 클라이언트) 미들웨어
// const setUserAX = (token) => {
//   return function (dispatch, getState) {
//     let headers = {
//       "access_token" : token,
//     }

//     axios.get("url/logins", headers)
//     .then((response) => {
//       console.log(response.data);
//       let user_info = {
//         user_id: reponse.data.id,
//         user_name: response.data.userName
//         // profile_url: response.data.myImg,
//       }
//   })
// }

// 로그아웃 : token 삭제만 하면 되므로 서버와 통신 불필요
const logout = () => {
  return function (dispatch, getstate) {
    localStorage.removeItem('token');
    dispatch(logOut());
    history.replace('/');
  }
};

// 리듀서 : 리덕스 store에서 사용자 정보를 원하는대로 처리. 
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
      draft.user = null;
      draft.is_login = false;
    }),
  },
  initialState
)

const actionCreators = {
  signupAPI,
  loginAPI,
  logout
};

export { actionCreators };
