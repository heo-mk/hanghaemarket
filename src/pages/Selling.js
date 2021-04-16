import React from "react";
import styled from "styled-components";

const Selling=(props)=>{

    return(
        <React.Fragment>
            <SellingMainContainer>
              <SellingContainer>
                <SellingWords>판매하기</SellingWords>
                <WrapInputs>
                    <ImageBox>
                        <ImageTitle><h4>이미지</h4></ImageTitle>
                        <ImageInput placeholder="이미지 등록"/>
                    </ImageBox>
                    
                    <TitleBox>
                        <Title><h4>제목</h4></Title>
                        <TitleInput placeholder="상품 제목을 입력해주세요."/>
                    </TitleBox>
                    <ContentsBox>
                        <Contents><h4>설명</h4></Contents>
                        <ContentsInput placeholder="상품 설명을 입력해주세요."/>          
                    </ContentsBox>

                    <EnrollButtonBox>
                        <EnrollButton>등록하기</EnrollButton>
                    </EnrollButtonBox>
                </WrapInputs>
              </SellingContainer>
            </SellingMainContainer>
        </React.Fragment>
    );
}

const SellingMainContainer = styled.div`
  /* 최상단과 항상 떨어져 있게 함 */
  padding-top: 100px; 
  display: flex;
  flex-direction: column;
  background-color: #fff;
  
  /* @media (max-width: 1000px){
    heigth: 
  } */
`;

const SellingContainer=styled.div`
height:100vh;
width:1000px;
margin:auto;

`;

const SellingWords=styled.h2`
border-bottom: 2px solid rgb(30, 29, 41);
margin-bottom: 0px;
height:50px;
`;

const WrapInputs=styled.div`
height:100vh;

padding-left: 0px;
`;

const ImageTitle=styled.div`
width: 5rem;
font-size: 18px;
padding-top: 14px;

`;

const ImageBox=styled.div`
width: 100%;
display: flex;
padding: 2rem 0px;
border-bottom: 1px solid rgb(220, 219, 228);

`;

const ImageInput=styled.input`
type=file;
width: 100px;
height:100px;

`;

const Title=styled.div`
width: 5rem;
font-size: 18px;
padding-top: 14px;

`;
const TitleBox=styled.div`
width: 100%;
display: flex;
padding: 2rem 0px;
border-bottom: 1px solid rgb(220, 219, 228);

`;

const TitleInput = styled.input`
  margin-top: 30px;
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
  align-items:center;
`;

const Contents=styled.div`
width: 5rem;
font-size: 18px;
padding-top: 14px;

`;

const ContentsBox=styled.div`
width: 100%;
display: flex;
padding: 2rem 0px;
border-bottom: 1px solid rgb(220, 219, 228);
`;

const ContentsInput = styled.input`
  margin-top: 30px;
  padding: 9px 0px 7px 8px;
  background-color: #FAFAFA;
  font-size: 13px;
  line-height: 18px;
  width: 500px;
  color: #262626;
  border: 1px solid #DBDBDB;
  outline: none;
  border-radius: 5px;
  height: 20px;
  margin-bottom: 12px;
`;

const EnrollButtonBox=styled.div`
width: 100%;
display: flex;
padding: 2rem 0px;
justify-content:flex-end;
margin-right: 20px;
`;

const EnrollButton=styled.button`
margin-right: 20px;

background-color:#6fa1f6;
border-radius:30px;

border:1px solid #6fa1f6;
width:100px;
height:30px;
font-size:15px;
color:#fff;
cursor: pointer;
`;
export default Selling;