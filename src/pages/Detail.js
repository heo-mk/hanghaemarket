import React,{useState} from 'react';
import styled from 'styled-components';
import img from "../shared/watch6.jpg";

// import ChatModal from "../components/ChatModal";

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//import ChatIcon from '@material-ui/icons/Chat';
import VisibilityIcon from '@material-ui/icons/Visibility';

import ProductInfoTab from '../elements/ProductInfoTab';

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux"; 
import { actionCreators as userActions } from "../redux/modules/user"
import { actionCreators as postActions } from "../redux/modules/post"
// import { actionCreators as chatActions} from "../redux/modules/chat"

const Detail =(props)=>{

  
    //여기에 클릭했을 때 getPostAPI 해온 정보들 가져오고싶음
  
    
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    const [ chat, setChats ] = useState();
    const [ is_chatmodal, setChatModal ] = useState();
    const [ btnChange, setBtnChange ] = useState(false);
    
    const detail_id = props.match.params.ids;  // 참고 사이트 : https://velopert.com/3417
    const is_me = useSelector((state) => state.user.user.username);  // 지금 로그인한 바로 나!
    const user_info = useSelector((state) => state.user.user);  // 
    // const chat_list = useSelector((state) => state.chat.list[props.id]);  // 채팅리스트를 가져온다
    // const is_chat = chat_list ? true : false;  // 채팅리스트가 있는가?
    console.log(is_me);
    console.log(user_info);
    console.log(detail_id);

    // React.useEffect(() => {
    //   dispatch(postActions.getPostAPI(detail_id));
      
    // }, []);

    const post_list = useSelector((state) => state.post.list)
    console.log(post_list);
    const target_idx = post_list.findIndex((p) => p.id == detail_id);
    console.log(target_idx);
    const post_target = post_list[target_idx]
    console.log(post_target);


    const changeHeart = () => {
      setBtnChange(!btnChange);
    };

    // React.useEffect(() => {
    //   dispatch(chatActions.getChatAPI.())
    // }, [])

    // 채팅모달창을 제어하는 함수들
    // const selectChat = (e) => {
    //   console.log(e.target.value);
    //   setChats(e.target.value);
    // };

    // const openChatModal = () => {
    //   setChatModal(true);
    // };

    // const closeChatModal = () => {
    //   setChatModal(false);
    // };

    // const addChat = () => {
    //   console.log(chats);
    //   let chat_info = {
    //     chat: chats,
    //     username: userInfo.username,
    //   }

    //   dispatch(chatActions.addChatAPI(chat_info, detail_id));
    //   setChats('')
    // }

    return (
    <React.Fragment>
        <DetailMainContainer>
        <SellInfo>
            <ImgBox><img src={post_target.image_url} width="400px" height="400px"></img></ImgBox>
            <InfoBox>
                <ProductContentsBox>
                    
                    <div>{post_target.title}</div>
                    <PriceBox><p><span>110,000</span> 원</p></PriceBox>
                    <IconsBox>
                        <FavoriteIcon style={{ fontSize: 20,  margin: "5px 10px", color:"#CCCCCC" }}/>    
                        <VisibilityIcon style={{ fontSize: 25,  margin: "5px 10px", color:"#CCCCCC" }}/>
                    </IconsBox>
                    <p>상품상태: 사용감 있음</p>
                    <p>배송비: 배송비 별도</p>
                    <p>거래지역: 분당, 판교, 강남</p>    
                </ProductContentsBox>            
                <ButtonBox>
                  
                    <LikeButton
                      onClick={(e)=>{
                        if(btnChange===false)
                        {
                          changeHeart();
                          e.preventDefault();
                          e.stopPropagation();
                        }else{
                          changeHeart();
                          e.preventDefault();
                          e.stopPropagation();
                        }
                      }}>
                    {btnChange===false? <FavoriteBorderIcon style={{ fontSize: 15, margin: "0 10px" }}/>:<FavoriteIcon style={{ fontSize: 15 }}/>}
                        {/* <HeartStyle>
                            <FavoriteBorderIcon style={{ fontSize: 15 }}/>
                        </HeartStyle> */}
                      찜
                    </LikeButton>

                    {/* <ChatButton 
                      onclick={openChatModal}
                      {...props}
                      is_chat={is_chat}
                      chat_list={chat_list}
                      is_me={is_me}
                      // user_info={user_info} 
                      >
                        <ChatStyle>
                            <ChatIcon style={{ fontSize: 15,  margin: "0 10px" }}></ChatIcon>
                        </ChatStyle>
                        채팅하기
                    </ChatButton> */}
                </ButtonBox>            
            </InfoBox>
        </SellInfo>
        
        <WrapTab>
            <ProductInfoTab/>
        </WrapTab>
        
        {/* <WrapInfo>
            <SelectInfoBar>
                <ProductInfoButton><h3>상품정보</h3></ProductInfoButton>
                <StoreInfoButton><h3>상점정보</h3></StoreInfoButton>
            </SelectInfoBar>
            
            <WrapSelectInfo>
                <ProductInfo>
                    <div><h3>상품정보</h3></div>
                    <div>사용감 있는 상품입니다. 반품, 환불은 불가합니다.</div>
                    
                    <div>상품문의</div>
                    <div><input text/></div>
                    <button>등록</button>

                </ProductInfo>
                <StoreInfo>

                </StoreInfo>
            </WrapSelectInfo>
        </WrapInfo> */}
      </DetailMainContainer>
        {/* {is_chatmodal ? 
          <ChatModal
            close={closeChatModal}
            {...props}
            // chat_list={chat_list}
            // is_chat={is_chat}
            // is_me={is_me}
            // user_info={user_info}
          />
          : null} */}
    </React.Fragment>
        
    );
}

Detail.defaultProps = {

};

const DetailMainContainer= styled.div`
  padding-top: 90px; 
  
`;

const SellInfo=styled.div`
display: flex;
padding: 30px 0px;
justify-content:center;

padding-bottom: 20px;

`;

const TitleBox=styled.div`
`;
const ImgBox=styled.div`
margin-top: 10px;
margin-right: 150px;
flex-shrink: 0;
`;

const InfoBox = styled.div`
margin-top: 10px;
width:500px;
height: 400px;
display: flex;
flex-direction: column;
-webkit-box-pack: justify;
justify-content: space-between;
align-items:center;

`;

const ProductContentsBox=styled.div`
padding-right: 100px;
margin: 0px;
border: 0px;
font: inherit;
vertical-align: baseline;

p > span{
    font-weight: bold;
    font-size:40px;
}

`;

const PriceBox=styled.div`
padding-bottom: 3px;
border-bottom: 1px solid rgb(238, 238, 238);
`;

const IconsBox=styled.div`

display: flex;
-webkit-box-align: center;
align-items: center;
`;

const ButtonBox=styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
`;


const LikeButton=styled.button`
margin-right:30px;
padding: 8px 24px;
background-color:#6fa1f6;
border-radius:30px;
margin:8px;
border:1px solid #6fa1f6;
width:15vw;
font-size:15px;
color:#fff;
cursor: pointer;
`;

const HeartStyle=styled.div`
margin-bottom: 2px;
`;

const ChatButton=styled.button`

padding: 8px 24px;
background-color:#6fa1f6;
border-radius:30px;
margin:8px;
border:1px solid #6fa1f6;
width:15vw;
font-size:15px;
color:#fff;
cursor: pointer;
`;

const ChatStyle=styled.div`
margin-bottom: 2px;
`;

const WrapTab=styled.div`
padding-top: 30px; 
width: 1000px;
margin: auto;

`;
const WrapInfo=styled.div`
justify-content:center;

`;
const SelectInfoBar=styled.div`
display: flex;
height: 70px;
margin-top: 30px;
`;

const ProductInfoButton=styled.button`
// padding: 8px 24px;
// background-color:#adaeaf;
// border-radius:10px;
// margin:8px;
// border:1px solid #adaeaf;
// width:15vw;
// height:5vh;

// & h3 {
//     margin-top: 0px;
//     margin-bottom: 0px;
// }

flex: 1 1 0%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    border-top: 1px solid rgb(33, 33, 33);
    border-right: 1px solid rgb(33, 33, 33);
    border-bottom: 1px solid rgb(255, 255, 255);
    background: rgb(255, 255, 255);
    color: rgb(33, 33, 33);
    font-weight: 600;
`;
const StoreInfoButton=styled.button`
// padding: 8px 24px;
// background-color:#adaeaf;
// border-radius:10px;
// margin:8px;
// border:1px solid #adaeaf;
// width:15vw;
// height:5vh;

// & h3 {
//     margin-top: 0px;
//     margin-bottom: 0px;
// }

flex: 1 1 0%;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
display: flex;
border-top: 1px solid rgb(238, 238, 238);
border-right: 1px solid rgb(238, 238, 238);
border-bottom: 1px solid rgb(33, 33, 33);
background: rgb(250, 250, 250);
color: rgb(136, 136, 136);

`;

const WrapSelectInfo=styled.div`
padding-right: 30px;
border-right: 1px solid rgb(238, 238, 238);
height: calc(100% - 50px);
`;

const ProductInfo=styled.div`
margin-left: 100px;
`;
const StoreInfo=styled.div`

`;

export default Detail;