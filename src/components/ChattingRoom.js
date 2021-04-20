import React from "react";
import styled from "styled-component";

import Stomp from "stompjs";
import SockJS from 'sockjs-client';

// token 가져오기 
const token = localStorage.getItem('Authorization');


let sockJS = new SockJS("http://localhost:8080/chatting");  // 소켓 연결 하는 url
let stompClient : Stomp.Client = Stomp.over(sockJS);

// 채팅방 컴포넌트
Stomp.stompClient