import React, {useState} from 'react'
import styled from "styled-components"
import hhlogo1 from "../shared/hhlogo1.png";
import CustomizedInputBase from "../elements/SearchBar";

import { history } from "../redux/configureStore";
import { useDispatch} from "react-redux";
import { SelectAll } from "@material-ui/icons";
// import { actionCreators as userActions } from "../redux/modules/user";  

const Header = () => { 
  const dispatch = useDispatch();
  const [is_login, setIsLogin] = React.useState(false);

  if (is_login) {
    return (
        <React.Fragment>
                <HeaderContainer>
                    <HeaderInnerContainer>
                        <HeaderLeft>
                            <TitleImg src={hhlogo1}/>
                        </HeaderLeft>
                        <HeaderCenter>
                            <SearchBox>
                                <CustomizedInputBase/>
                            </SearchBox>
                            <ItemListBox>
                                <Sellbutton>판매하기</Sellbutton>
                                <MyShop>내상점</MyShop>
                                <HHtalk>항해톡</HHtalk>
                            </ItemListBox>
                        </HeaderCenter>
                        <HeaderRight>
                            <GoDetails>상품상세보기</GoDetails>
                            <LoginSignupItems>
                                <LoginAndOutBtn>로그아웃</LoginAndOutBtn>
                            </LoginSignupItems>
                        </HeaderRight>
                    </HeaderInnerContainer>
                </HeaderContainer>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderInnerContainer>
                    <HeaderLeft>
                        <TitleImg src={hhlogo1}/>
                    </HeaderLeft>
                    <HeaderCenter>
                        <SearchBox>
                            <CustomizedInputBase/>
                        </SearchBox>
                        <ItemListBox>
                            <Sellbutton>판매하기</Sellbutton>
                            <MyShop>내상점</MyShop>
                            <HHtalk>항해톡</HHtalk>
                        </ItemListBox>
                    </HeaderCenter>
                    <HeaderRight>
                        <GoDetails>상품상세보기</GoDetails>
                        <LoginSignupItems>
                            <LoginAndOutBtn>로그인</LoginAndOutBtn>
                            <SignupBtn>회원가입</SignupBtn>
                        </LoginSignupItems>
                    </HeaderRight>
                </HeaderInnerContainer>
            </HeaderContainer>
        </React.Fragment>
  )
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  background-color: white;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100px;
  border: none;
  border-bottom: 1px solid #DBDBDB;
  z-index: 10;
`;

const HeaderInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:auto;
  width: 975px;
  height: 100%;
  padding: 0 20px 0 20px;
  /* 페이지가 축소 되면 오른쪽 부분이 잘려서 보이지 않는 것을 막는 태그 */
  box-sizing: border-box;
  @media (max-width: 975px){
    width: 100%;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const TitleImg = styled.img`
  width: 103px;
  height: 29px;
  align-self: center;
  cursor: pointer;
`;

const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SearchBox = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

const ItemListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const Sellbutton = styled.button`
  width: 80px;
  height: 30px;
  align-items: center;
  text-align: center;
  /* padding-top: 10px; */
  border: none;
  border-radius: 2px;
  outline: none;
  margin-right: 20px;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

const MyShop = styled.button`
  width: 80px;
  height: 30px;
  align-items: center;
  text-align: center;
  /* padding-top: 10px; */
  border: none;
  border-radius: 2px;
  outline: none;
  margin-right: 20px;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

const HHtalk = styled.button`
  width: 80px;
  height: 30px;
  align-items: center;
  text-align: center;
  /* padding-top: 10px; */
  border: none;
  border-radius: 2px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const GoDetails = styled.div`
  display: flex;
  font-size: 14px;
  color: green;
  margin-bottom: 25px;
  padding: 5px;
  border-radius: 4px;
  
  cursor: pointer;
  &:hover { 
    background-color: #D49466;
  }
`;

const LoginSignupItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginAndOutBtn = styled.button`
  width: 65px;
  height: 25px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  /* backgroud-color: ; */
  &:hover { 
    background-color: #D49466;
  }
`;

const SignupBtn = styled.button`
  width: 65px;
  height: 25px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  /* backgroud-color: ; */
  &:hover { 
    background-color: #D49466;
  }
`;