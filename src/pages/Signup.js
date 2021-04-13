import React, {useState} from "react"
import styled from "styled-components"
import hhlogo1 from "../shared/hhlogo1.png";
import ProfileUpload from "../shared/ProfileUpload";

// import { actionCreators as userActions } from "../redux/modules/user"
// import { actionCreators as imageActions } from "../redux/modules/image"
import { useDispatch, useSelector } from "react-redux";
// import ProfileUpload from "../shared/ProfileUpload"

const Signup = () => {
  const dispatch = useDispatch();
  // const profile_preview = useSelector((state) => state.image.profile_preview);
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <React.Fragment>
      <SignupMainContainer>
        <SignupContainer>
          <SignupImg src={hhlogo1}/>
          <SignupText>
            자신의 사진을 보여주세요!
          </SignupText>
          <ProfileImg />
          {/* <ProfileUpload/> */}
          {/* <ProfileUpload/> */}
          <SignupInput placeholder="이메일"/>
          <SignupInput placeholder="이름"/>
          <SignupInput placeholder="비밀번호" type="password"/>
          <SignupInput placeholder="비밀번호 확인" type="password"/>
          <SignupInput placeholder="거주하는 곳의 시/군/구" type="password"/>
          <SignupInput placeholder="거주하는 동/리" type="password"/>
          <SignupBtn>회원가입</SignupBtn>
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