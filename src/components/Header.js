import React from "react";
import styled from "styled-components"
import hhlogo1 from "../shared/hhlogo1.png";

import { history } from "../redux/configureStore";
import { useDispatch} from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";  

const Header = () => { 
  const dispatch = useDispatch();

  return(
    <React.Fragment>
      <HeaderContainer>
        <HeaderInnerContainer>
          <TitleImg src={hhlogo1}/>
          <HeaderIcons>
          </HeaderIcons>
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

const TitleImg = styled.img`
  width: 103px;
  height: 29px;
  align-self: center;
  cursor: pointer;
`;

const HeaderIcons = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
`;