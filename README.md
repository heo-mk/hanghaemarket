# 🎊 항해99 미니프로젝트

## 항해마켓 | 중고제품 직거래 플랫폼 사이트

### 개요
- 명칭 : 항해마켓
- 개발 인원 : 5명 (프론트 2명[허민규,이지은], 백엔드 3명[김승욱,장현준,이은지])
- 개발 기간 : 2021.04.09 ~ 2021.04.22
- 개발 환경 : React, Spring
- 형상 관리 툴 : git
- 일정 관리 툴 : [Notion](https://www.notion.so/3295a6aca9bd411b9cc7b5eadb9239cb?v=002a8755c0414bf388614efa88f27d8a)
- 사이트 : [항해마켓(현재는 서버가 내려간 상태)](http://hanghaemarket.shop/)
- 시연 영상 : [유튜브 링크](https://youtube.com/watch?v=idAJS0OLPhY&feature=share)  

### 멤버구성
+ Frontend - React
  + 허민규
    + 회원가입/로그인 구현
    + 헤더 제작
    + 채팅 모달 제작
    + 리덕스 모듈 코드 작성
    + 클라이언트-서버간의 요청-응답 과정 테스트 및 구현
  + 이지은
    + 메인페이지/상세페이지 뷰 제작
    + 상품게시물 작성/수정 페이지 뷰 제작
    + 상품게시물 수정/삭제 모달창 제작
+ Backend - Spring ([벡엔드 깃허브 레포](https://github.com/rlatmd0829/hanghae99_market)) 
  + 장현준
  + 김승욱
  + 이은지
  
### 프로젝트 특징
- React, Spring을 기반으로 프로젝트 구현

    - 각 파트의 별도 Repository를 생성 후 작업
    - 프론트 : AWS S3 정적 호스팅
    - 백엔드 : AWS EC2 서버 호스팅
    - 빌드 후, S3와 EC2 연동

- 로그인 처리는 Jwt Token 방식으로 처리
- 게시글 작성 시 프론트에서 이미지 파일 형태로 받아 서버측에서 S3에 업로드 후 Url 돌려주는 방식
- 채팅은 STOMP와 SockJS로 구성
  
### 프로젝트 기능

- 로그인, 회원가입
- 소셜로그인
- 게시글 CRUD
- 이미지 S3 업로드
- 댓글 CRUD
- 찜하기 (좋아요)
- 팔로우
- 채팅

### API 설계
![image](https://user-images.githubusercontent.com/70622731/115699219-6b95b400-a3a0-11eb-8c00-c4fcd0c3f420.png)
![image](https://user-images.githubusercontent.com/70622731/115699310-823c0b00-a3a0-11eb-94ca-103b24c80005.png)
![image](https://user-images.githubusercontent.com/70622731/115699379-9122bd80-a3a0-11eb-97e6-f309d5b65f61.png)
![image](https://user-images.githubusercontent.com/70622731/115699448-a0097000-a3a0-11eb-9efc-1780f32e21b8.png)

## 서비스 구현 사진

### 1. 회원가입
- 메인페이지
  - 전체적인 구성 : 위에서부터 헤더/가운데글/상품 게시물 목록 
![항해1](https://user-images.githubusercontent.com/79818840/119585961-c76fb480-be06-11eb-9135-3f4b510d3d21.JPG)

- 회원가입페이지
![항해2](https://user-images.githubusercontent.com/79818840/119585965-cb033b80-be06-11eb-84fc-5db72df29391.JPG)

- 로그인 페이지
  - 일반로그인을 구현
![항해3](https://user-images.githubusercontent.com/79818840/119585968-ccccff00-be06-11eb-88d8-8cffc50b94fc.JPG)

- 게시물 작성창
  - 게시물 사진, 제목, 가격, 설명을 올린다.
  - API를 이용해 서버로 데이터를 보내고, 리덕스에 데이터를 저장시켜 새로고침 없이도 메인페이지에 게시물로 뜨게 한다.
![항해4](https://user-images.githubusercontent.com/79818840/119585970-cdfe2c00-be06-11eb-8094-144f4c13704e.JPG)
![항해5](https://user-images.githubusercontent.com/79818840/119585972-cf2f5900-be06-11eb-8529-7c312a09c47c.JPG)
![항해6](https://user-images.githubusercontent.com/79818840/119585975-d0608600-be06-11eb-8d68-af7ca40929a2.JPG)

- 게시물 상세페이지
  - 메인페이지에는 보이지 않는 더 상세한 정보(배송비, 거래지역 등등)를 보여준다.
  - 찜, 채팅기능이 있다
![항해7](https://user-images.githubusercontent.com/79818840/119585977-d191b300-be06-11eb-9235-d60254e32f50.JPG)

- 채팅창
  - 게시물 상세페이지의 채팅하기 버튼을 누르면 채팅창이 열린다.
  - STOMP, SockJS을 이용해 서버와 통신은 성공
  - 시간 부족으로 인해서 채팅 구현은 완성하지 못함
![항해8](https://user-images.githubusercontent.com/79818840/119585979-d2c2e000-be06-11eb-9aeb-324c5e9fd97f.JPG)

- 로그아웃시, localStorage의 모든 데이터들이 지워지게 설정했다.
![항해9](https://user-images.githubusercontent.com/79818840/119585984-d35b7680-be06-11eb-94f8-8bc836a11f4b.JPG)
![항해10](https://user-images.githubusercontent.com/79818840/119585987-d48ca380-be06-11eb-9977-d88f446ba534.JPG)


## 아쉬운 점 
### 절반의 성공으로 끝난 채팅용 코드(서버와 통신은 성공, 시간부족으로 구현 완성은 실패)

### SockJs, STOMP 패키지를 이용한 서버와의 채팅용 통신을 위한 코드
```ChatModal.js
// 소켓 통신
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import StompJS from '@stomp/stompjs';

const ChatModal = (props) => {

  const dispatch = useDispatch();

  let socket = new SockJS("http://52.78.12.253/chatting");
  // const ws = Stomp.over(sock);
  const stompClient = Stomp.over(socket);  // endpoint

  const post_list = useSelector((state) => {
      // console.log(state)
      // window.alert('')
      return state.post.detail_list
    });
  const target_idx = post_list.findIndex((p) => p.id == props.detail_id);
  const post_target = post_list[target_idx]
  
  // 이메일 정보
  const receiverEmail = post_target.email;
  const userEmail = localStorage.getItem('email');
  console.log(receiverEmail);

  const _token = localStorage.getItem("Authorization");
    let token = {
      headers : { Authorization: `${_token}` }, 
    }

  const API = `http://52.78.12.253/api/chat/newChat?receiver=${receiverEmail}&sender=${userEmail}`;
  axios.post(API, token)
    .then((response) => {
      console.log(response.data);

      let chatInfo = {
        senderName: response.data.senderName,
        senderEmail: response.data.senderEmail,
        senderId: response.data.senderId,
        receiverName: response.data.receiverName,
      }

      console.log(response.data.messages);
      console.log(chatInfo);
      dispatch(chatActions.getChatRoomInfo(chatInfo));
      // }
    }).catch((error) => {
      console.log(error)
      window.alert("채팅 데이터들을 가져오지 못했습니다.")
    })

  React.useEffect(()=>{
    const userEmail = localStorage.getItem('email');
    console.log(stompClient);
    stompClient.connect({}, function () {
        stompClient.subscribe('/topic/' + userEmail, function (e) {
            if(e.body.toString() == "notice"){
                // alertClosing('noticeCome',2000);
            }
            else{
                // alertClosing('comeMessage',2000);
            }
          });
        });
    }, []);
    
```
- STOMP와 SockJS를 이용해 서버와 채팅용 양방향 통신을 위한 세팅을 해줌
- 그리고 useEffect에 채팅용 통신을 위한 코드를 넣어서, 채팅창이 뜨면 실행되게 한다.

그러면 다음과 같이 개발자 도구에 통신이 연결 되었다는 메시지가 뜬다. 
![KakaoTalk_20210531_031935632](https://user-images.githubusercontent.com/79818840/120115649-9e14a700-c1bf-11eb-95bd-3847a3941bd5.jpg)

하지만 프로젝트 기간이 끝나가는 시점이라서 시간이 부족해 더는 구현하지 못한 아쉬움이 있다.


## 프로젝트 수행중 가장 크게 배운 점

### React는 비동기 처리가 많으므로 그로인한 문제가 생기면 제어를 해줘야 한다. 




