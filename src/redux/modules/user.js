// 회원가입, 로그인 데이터를 사용하는 리덕스 모듈.
import axios from "axios"
import {createActions, handleActions} from "redux-actions";
import { produce } from "immer";
import { history } from "../configurStore";


const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

const initialState = {
  user: {
    username: "",
    password: "", 
    email: "", 
    city: "",
    street: ""
  },
  is_login: false,
  is_loading: false
}

const signupAX = (email, username, password) => {
  return function (dispatch) {
    if(!profile_url){
      profile_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjZn8mOw7F4rtWWKbEIIHOr_w_GAeHiXPgA&usqp=CAU"
    }

    axios.post("https://15.164.217.16/signups", {
      username: username,
      password: password,
      email: email,
      city: city,
      street: street,
    })
    .then((response) => {
      console.log(response.data)
      history.replace('/logins')
    }).catch((error) => {
      window.alert('회원가입이 정상적으로 이뤄지지 않았습니다.')
    })
  }
}

const loginAX = (id, pwd) => {
  return function (dispatch, getState) {
    axios.post("https://15.164.217.16/logins", {
      email: email,
      password: password,
  })
  .then(response) => {
    let token = response.data
    console.log(response.data)
    localStorage.setItem("access_token", token)
    dispatch(setUerAX(token))
  }
}