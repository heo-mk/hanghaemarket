# 🎊 항해99 미니프로젝트

## 항해마켓 | 중고제품 직거래 플랫폼 사이트
<h4><a href="http://hanghaemarket.shop/" target="_blank">사이트 바로가기(현재는 서버가 내려간 상태입니다)</a>

## 소개 유튜브 영상
<h4><a href="https://www.youtube.com/watch?v=idAJS0OLPhY" target="_blank">항해마켓 시연 영상</a>

### 개발기간
+ 2021년 4월 9일(금) ~ 2021년 4월 22일(목)

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

## 구동사진

### 1. 회원가입
![회원가입 페이지]
![항해1](https://user-images.githubusercontent.com/79818840/119585961-c76fb480-be06-11eb-9135-3f4b510d3d21.JPG)
![항해2](https://user-images.githubusercontent.com/79818840/119585965-cb033b80-be06-11eb-84fc-5db72df29391.JPG)
![항해3](https://user-images.githubusercontent.com/79818840/119585968-ccccff00-be06-11eb-88d8-8cffc50b94fc.JPG)
![항해4](https://user-images.githubusercontent.com/79818840/119585970-cdfe2c00-be06-11eb-8094-144f4c13704e.JPG)
![항해5](https://user-images.githubusercontent.com/79818840/119585972-cf2f5900-be06-11eb-8529-7c312a09c47c.JPG)
![항해6](https://user-images.githubusercontent.com/79818840/119585975-d0608600-be06-11eb-8d68-af7ca40929a2.JPG)
![항해7](https://user-images.githubusercontent.com/79818840/119585977-d191b300-be06-11eb-9235-d60254e32f50.JPG)
![항해8](https://user-images.githubusercontent.com/79818840/119585979-d2c2e000-be06-11eb-9aeb-324c5e9fd97f.JPG)
![항해9](https://user-images.githubusercontent.com/79818840/119585984-d35b7680-be06-11eb-94f8-8bc836a11f4b.JPG)
![항해10](https://user-images.githubusercontent.com/79818840/119585987-d48ca380-be06-11eb-9977-d88f446ba534.JPG)

