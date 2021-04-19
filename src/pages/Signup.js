import React, {useState} from "react"
import styled from "styled-components"
import hhlogo1 from "../shared/hhlogo1.png";
import UploadImage from "../shared/UploadImage";

import {emailCheck} from "../shared/common"
import { actionCreators as userActions } from "../redux/modules/user"
import { actionCreators as imageActions } from "../redux/modules/image"
import { useDispatch, useSelector } from "react-redux";
// import { Email } from "@material-ui/icons";

const Signup = () => {
  const dispatch = useDispatch();
  const profile_preview = useSelector((state) => state.image.profile_preview);
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPwd] = useState('');
  const [pwdConfirm, setConfirmedPwd] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const profile_anonymous = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjZn8mOw7F4rtWWKbEIIHOr_w_GAeHiXPgA&usqp=CAU"
  
  const ok_submit = email && password && username && city && street ? true : false;
                              // && pwdConfirm 

  React.useEffect(() => {
    dispatch(imageActions.profilePreview(profile_anonymous))
  }, [])

  const submitEmail= (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const submitName = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const submitPwd = (e) => {
    // console.log(e.target.value);
    setPwd(e.target.value)
  }

  const submitConfirmedPwd = (e) => {
    // console.log(e.target.value);
    setConfirmedPwd(e.target.value)
  }

  const submitCity = (e) => {
    // console.log(e.target.value);
    setCity(e.target.value)
  }

  const submitStreet = (e) => {
    // console.log(e.target.value);
    setStreet(e.target.value)
  }
// !pwdConfirm ||
  const signup = () => {
    if (!email || !username || !password || !city || !street) {
      window.alert("아이디, 이름, 비밀번호, 거주하는 시/군/구, 거주하는 동/리를 모두 입력해주세요!");
      return;
    }
  
    if (!emailCheck(email)) {
      window.alert('이메일 형식이 맞지 않습니다!');
      return;
    }

    // if (password !== pwdConfirm) {
    //   window.alert("비밀번호와 비빌번호 확인이 일치 하지 않습니다!");
    //   return;
    // }

    dispatch(userActions.signupAPI(email, password, username, city, street))
  }

  const ImageError = () => {
    window.alert('잘못된 이미지 주소입니다.')
    dispatch(imageActions.profilePreview(profile_anonymous))
  }

  return (
    <React.Fragment>
      <SignupMainContainer>
        <SignupContainer>
          <SignupImg src={hhlogo1}/>
          <SignupText>
            자신의 사진을 보여주세요!
          </SignupText>
          <ProfileImg 
            src={profile_preview ? profile_preview : profile_anonymous}
            onError={ImageError}/>
          <UploadImage/>
          <SignupInput placeholder="이메일" onChange={submitEmail}/>
          <SignupInput placeholder="비밀번호" type="password" onChange={submitPwd}/>
          {/* <SignupInput placeholder="비밀번호 확인" type="password" onChange={submitConfirmedPwd}/> */}
          <SignupInput placeholder="닉네임" onChange={submitName}/>
          <SignupInput placeholder="거주하는 곳의 시/군/구" onChange={submitCity}/>
          <SignupInput placeholder="거주하는 동/리" onChange={submitStreet} />
          {ok_submit ? (
            <SignupBtn onClick={signup}>회원가입</SignupBtn>
          ) : (
            <SignupBtn style={{opactiy: "0.3"}}>회원가입</SignupBtn>
          )}
        </SignupContainer>
      </SignupMainContainer>
    </React.Fragment>
  )
}

export default Signup;

const SignupMainContainer = styled.div`
  /* 최상단과 항상 떨어져 있게 함 */
  padding-top: 90px; 
  display: flex;
  /* @media (max-width: 1000px){
    heigth: 
  } */
`;

const SignupContainer = styled.div`
  width: 400px;
  border: 1px solid #DBDBDB;
  margin: auto;
  margin-top: 20px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px; 
`;

const SignupImg = styled.img`
  height: 51px;
  width: 175px;
`;

const SignupText = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  color: #8E8E8E;
  margin-top: 5px;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 0px 0px 20px;
  border-radius: 40px;
  background-size: cover;
`;

const SignupInput = styled.input`
  padding: 9px 0px 7px 8px;
  background-color: #FAFAFA;
  font-size: 13px;
  line-height: 18px;
  width: 250px;
  color: #262626;
  border: 1px solid #DBDBDB;
  outline: none;
  border-radius: 2px;
  height: 20px;
  margin-bottom: 6px;
`;

const SignupBtn = styled.button`
  width: 260px;
  padding: 7px 0px 7px 8px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  border: 1px solid #DBDBDB;
  cursor: pointer;
  outline: none;
  background-color: #0095F6;
  color: white;
`;