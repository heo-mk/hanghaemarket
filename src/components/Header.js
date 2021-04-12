import React from "react";
import styled from "styled-component";

import { history } from "../redux/configureStore";
import { useDispatch} from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";  

const Header = () => { 
  const dispatch = useDispatch();

  return(
    <React.Fragment>
      <HeaderContainer>

      </HeaderContainer>
    </React.Fragment>
  )
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
`;