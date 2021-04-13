import React from "react";
import styled from "styled-components";
import hhlogo1 from "../shared/hhlogo1.png";

const NotFound = (props) => {

  return (
    <React.Fragment>
      <NonExist src={hhlogo1}/>
    </React.Fragment>
  )
}

export default NotFound;

const NonExist = styled.img`
  border: none;
  outline: none;
  position: fixed;
  width: 943px;
  height: 234px;
  font-size: 50px;
  border-radius: 10px;
  background-color: transparent;
  /* 이미지를 가운데로 정렬시키는 부분 */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  box-sizing: border-box;
  align-items: center;
  z-index: 10;

  /* 화면이 614px 이하가 되면 이미지가 절반으로 축소되는 반응형 */
  @media (max-width: 943px){
    width: 50%;
    height: auto;
  }
`;