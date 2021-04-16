// 상세페이지의 채팅 버튼을 누르면 갑툭튀하는 채팅창이 뜨게 하는 모달
// Detail.js (부모 컴포넌트) => ChatModal.js (자식 컴포넌트)
import React, {useState} from "react";

import styled from "styled-component";
import CloseIcon from '@material-ui/icons/Close';

// import { actionCreators as chatActions } from "../redux/modules/chat"
import { actionCreators as userActions } from "../redux/modules/user"; 
import { useDispatch } from "react-redux";

const ChatModal = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login)

  const [chats, setChats] = useState();
  const ok_submit = chat? true: false;
  console.log(props)

  // 입력된 데이터를 채팅글귀용 데이터로 설정하는 함수
  const selectChat = (e) => {
    console.log(e.target.value);
    setChats(e.target.value);
  }

  // 채팅글귀 데이터를 전송하는 함수
  const addChat = () => {
    console.log(chats)
    let chat_info = {
      chats: chats,
      // username: props.userInfo.username,
      // profile_url: props.userInfo.uid,
    }

    // dispatch(chatActions.addChatAPI(chat, props.id))
  }

  // 채팅창은 크게 헤더+바디로 구성
  return( 
    <React.Fragment>
      {/* 모달 외부 */}
      <Component onclick={props.close}/>
      <ExitContainer>
        <ExitBtn onClick={props.close}>
          <CloseIcon fontsize="large"/>
        </ExitBtn>
      </ExitContainer>
      {/* 모달 본체 */}
      <ModalComponent>
        <ModalHeader>

        </ModalHeader>
        <ModalBody>
          <ModalChatBox/>
        </ModalBody>
        <ModalChatInput>

        </ModalChatInput>

      </ModalComponent>


    </React.Fragment>
  )
}

export default ChatModal;

// 화면전체를 차지하는 부분.
// opacity값을 줘서 모달의 배경을 불투명한 옅은 검은색이 되게 한다.
// position: fixed로 화면이 고정되게 한다. 
const Component = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 10;
`;

// 모달밖의 공간을 클릭하면 모달이 바로 꺼지게 하는 부분.
const ExitContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 12px;
  z-index: 20;
`;

// 오른쪽 상단 구석에 x 버튼. 채팅창 없어진다.
const ExitBtn = styled.button`
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 950px;
  height: 600px;

`;

const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #EFEFEF;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalBody = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalChatBox = styled.div`
  padding: 0px 16px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  height: 480px;
  /* 채팅량이 많으면 스크롤로 아래 부분이
  위로 올라가게 해서 댓글이 보이게 하는 부분 */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  };
`;

const ModalChatInput = styled.div`

`;
