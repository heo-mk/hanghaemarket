import React, {useState} from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

import hhlogo1 from "../shared/hhlogo1.png";

const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [pwd, setPwd] = useState();
  // const ok_submit = id && pwd ? true : false;

  return (
    <React.Fragment>
      <LoginMainContainer>
        <LoginContainer>
          <LoginImg src={hhlogo1} />
          <LoginInput placeholder="이메일" /> 
          <LoginInput placeholder="비밀번호" type="password" />
          <LoginBtn>Log In</LoginBtn>   
        </LoginContainer>
        <AccountContainer>
          <NoAccount>
            회원이 아니신가요? 
            <GotoSignup>
              회원가입
            </GotoSignup>
          </NoAccount>
        </AccountContainer>
      </LoginMainContainer>
    </React.Fragment>
  )
}

export default Login;

const LoginMainContainer = styled.div`
  /* 최상단과 항상 떨어져 있게 함 */
  padding-top: 90px; 
  display: flex;
  flex-direction: column;
  /* @media (max-width: 1000px){
    heigth: 
  } */
`;

const LoginContainer = styled.div`
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

const AccountContainer = styled.div`
  width: 400px;
  border: 1px solid #DBDBDB;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 20px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 0px;
`;

const LoginImg = styled.img`
  height: 51px;
  width: 175px;
  margin-bottom: 30px;
`;

const LoginInput = styled.input`
  padding: 9px 0px 7px 8px;
  background-color: #FAFAFA;
  font-size: 13px;
  line-height: 18px;
  width: 250px;
  color: #262626;
  border: 1px solid #DBDBDB;
  outline: none;
  border-radius: 5px;
  height: 20px;
  margin-bottom: 12px;
`;

const LoginBtn = styled.button`
  width: 260px;
  padding: 7px 0px 7px 8px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  border: 1px solid #DBDBDB;
  cursor:pointer;
  outline: none;
  background-color: #0095F6;
  color: white;
`;

const NoAccount = styled.p`
  font-size: 14px;
  color: #262626; 
`;

const GotoSignup = styled.span`
  font-size: 14px;
  color: #0095F6;
  font-weight: 600;
  cursor: pointer;
`;