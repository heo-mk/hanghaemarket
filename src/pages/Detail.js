import React,{useState} from 'react';
import styled from 'styled-components';
import img from "../shared/watch6.jpg";

const Detail =(props)=>{


    return (
    <React.Fragment>
        <SellInfo>
            <ImgBox><img src={img} width="400px" height="400px"></img></ImgBox>
            <InfoBox>
                <ProductContentsBox>
                    <h3>애플워치6 스테인리스 싸게 팝니다.</h3>
                    <PriceBox><p><span>110,000</span> 원</p></PriceBox>
                    <p>상품상태: 사용감 있음</p>
                    <p>배송비: 배송비 별도</p>
                    <p>거래지역: 분당, 판교, 강남</p>    
                </ProductContentsBox>            
                <ButtonBox>
                    <LikeButton>찜</LikeButton>
                    <ChatButton>채팅하기</ChatButton>
                </ButtonBox>            
            </InfoBox>
        </SellInfo>

        
            <SelectInfoBar>
                <ProductInfoButton><h3>상품정보</h3></ProductInfoButton>
                <StoreInfoButton><h3>상점정보</h3></StoreInfoButton>
            </SelectInfoBar>
            
            <WrapSelectInfo>
                <ProductInfo>
                    <div><h3>상품정보</h3></div>
                    <div>사용감 있는 상품입니다. 반품, 환불은 불가해요.</div>
                </ProductInfo>
                <StoreInfo>

                </StoreInfo>
            </WrapSelectInfo>
{/*         
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

    </React.Fragment>
        
    );
}

const SellInfo=styled.div`
display: flex;
padding: 30px 0px;
padding-top: 30px;
padding-bottom: 30px;
justify-content:center;

`;

const ImgBox=styled.div`
margin-right: 150px;
flex-shrink: 0;
`;

const InfoBox=styled.div`
width:500px;
height: 400px;
display: flex;
flex-direction: column;
-webkit-box-pack: justify;
justify-content: space-between;
align-items:center;

`;

const ProductContentsBox=styled.div`
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
width:10vw;
`;

const ChatButton=styled.button`

padding: 8px 24px;
background-color:#6fa1f6;
border-radius:30px;
margin:8px;
border:1px solid #6fa1f6;
width:10vw;
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

`;
const StoreInfo=styled.div`

`;

export default Detail;