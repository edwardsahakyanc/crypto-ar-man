import React from "react";
import FileMenu from "../../../myGallery/fileMenu/fileMenu";
import CircleIcon from "../newUserContent/styled-components/icon-wrapper";
import {Row} from "../../styled-component/row";
import message from "../../assets/message.svg";
import ProfilePic from "../../assets/profile_pic.png";
import flag from "../../assets/United_Kingdom.svg.png";
import boris from "../../assets/boris.jpg";
import LikeButton from "../newUserContent/styled-components/likeButton";
import link from "../../assets/link.svg";
import bitcoin from "../../assets/bitcoin.svg";
import ShareIcon from "../../assets/share-icon.svg";
import chat from "../../assets/chat.svg";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const UserHeader = styled.div`
    position: relative;
    width: 100%;
    max-height: 278px;
    height: 100%;
    min-height: 96px;
    background-image: url(${flag});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (max-width: 500px){
    height:183px;
    }
    @media (max-width: 391px){
    height: 137px;
    }
    @media (max-width: 376px){
    height: 116px;
    }
    @media (max-height: 870px) and (min-width: 1024px){
        height:183px;
    }
    @media (max-height: 770px) and (min-width: 1024px){
        height: 137px;
    }
    @media (max-height: 720px) and (min-width: 1024px){
        height: 116px;
    }
    @media (max-height: 700px) and (min-width: 1024px){
        height: 96px;
    }
    @media (max-width: 375px) and (max-height: 700px) {
        display:none;
    }
`;
const UserWrapper = styled.div`
    background: #1a1a1a;
    padding: 93px 10px 19px;
    position:relative;
    @media (max-width: 375px) and (max-height: 700px) {
     display: none;
    }
`;
const MobileUserWrapper = styled.div`
    display: none;
    background-color:#1a1a1a;
    padding-bottom: 12px;
    @media (max-width: 375px) and (max-height: 700px) {
        display: block;
    }
    @media (max-width: 350px) and (max-height: 650px) {
        display: none;
    }
`;
const MobileUserContent = styled.div`
    display: flex;
    position: relative;
    padding-top: 64px;
`;
const SmallDevice = styled.div`
    display: none;
    position: relative;
    padding-top: 62px;
    padding-bottom: 12px;
    background-color:#1a1a1a;
    @media (max-width: 350px) and (max-height: 650px) {
        display: block;
    }
    .icons{
        margin-top: 12px;
        display:flex;
        align-items: center;
        justify-content: center;
        &>div{
            margin: 0 6px;
        }
    }
`;
const UserImage = styled.div`
    max-width: 164px;
    max-height: 164px;
    width: 164px;
    height: 164px;
    border-radius: 100%;
    overflow: hidden;  
    img {
      width: 100%;  
      height: 100%;
      object-fit: cover;
    }
`;
const LikeAndCommentWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -87px;
    z-index: 10;
`;
const UserName = styled.p`
  width: 236px;
  height: 46px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101010;
  border-radius: 100px;
  color: #eaeaea;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 0 8px;
  cursor: pointer;
  @media (max-width: 375px) and (max-height: 700px) {
        margin: 0 0 12px 0;
    }
    @media (max-width: 350px) and (max-height: 650px) {
        width: 158px;
        height: 36px;
        font-size: 16px;
        margin: 0;
    }
`;
const PayWrapper = styled.div`
  width: 46px;
  height: 46px;
  background-color: #101010;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #eaeaea;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  @media (max-width: 350px) and (max-height: 650px) {
        width: 36px;
        height: 36px;
        font-size: 14px;
   }
`;
const Description = styled.div`
  max-width: 342px;
  margin-left: auto;
  margin-right: auto;
  color: #eaeaea;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin-top: 16px;
  @media (max-width: 375px) and (max-height: 700px) {
        margin-top: 12px;
    }
`;

const UserContentWrapper = styled.div`
    width: 100%;
    height:100%;
    overflow: auto;
    background-color: #292929;
`;

const QuizContent = styled.div`
    padding: 18px 22px;
    margin: 18px 35px 16px 35px;
    border-radius: 16px;
    color: #fff;
    background: #000;
    text-align: center;
    
    .quiz-text {
      margin: 7px 0 24px 0;
      font-size: 24px;
      text-align: center;
    }
    
    .quiz-btn {
      color: #fff;
      width: 142px;
      height: 52px;
      border-radius: 20px;
      border: none;
      outline: none;
      font-size: 16px;
      font-family: "Azo Sans", sans-serif;
    }
    
    .no-btn {
      background-color: #954141;
    }
    
    .yes-btn {
      background-color: #2B6734;
      margin-left: 16px;
    }
    
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`;

const CommentBtn = styled.button`
      padding: 8px 22px;
      text-align: center;
      color: #D3D3D3;
      font-family: "Azo Sans", sans-serif;
      background-color: #000;
      border: none;
      outline: none;
      border-radius: 54.5px;
      font-size: 16px;
      margin: 0 auto;
`

const FooterLink = styled.div`
     font-size: 12px;
     margin: 26px 0 24px 0; 
     
     a {
       color: #DFDFDF;
       text-decoration: none;
       font-family: "Azo Sans", sans-serif;
     }
`;

const Separator = styled.div`
    height: 9px;
    background: #141414;
`;

const Politician = () => {
    return (
        <UserContentWrapper>
            <UserHeader> </UserHeader>
            <UserWrapper>
                <LikeAndCommentWrapper>
                    <Row className="items-bottom justify-center">
                        <CircleIcon imgUrl={message} alt={"icon"}/>
                        <UserImage>
                            <img src={boris} alt="profile-pic"/>
                        </UserImage>
                        <div>
                            <LikeButton/>
                        </div>
                    </Row>
                </LikeAndCommentWrapper>
                <Row className="items-center justify-center">
                    <CircleIcon imgUrl={link} alt={"icon"}/>
                    <UserName onClick={'handleOpenModal'}>Boris Johnson</UserName>
                    <CircleIcon imgUrl={bitcoin} alt={"icon"}/>
                    {/*<PayWrapper>pay</PayWrapper>*/}
                </Row>
                <Description>
                    Boris Johnson is a conservative politician
                    and the current Prime Minister of the UK.
                </Description>
            </UserWrapper>
            <MobileUserWrapper>
                <MobileUserContent>
                    <FileMenu/>
                    <UserImage>
                        <img src={ProfilePic} alt="profile-pic"/>
                    </UserImage>
                    <div>
                        <UserName onClick={"handleOpenModal"}>{"name"}</UserName>
                        <Row className="items-center justify-between">
                            <CircleIcon imgUrl={ShareIcon} alt={"icon"}/>
                            <CircleIcon imgUrl={chat} alt={"icon"}/>
                            <LikeButton/>
                            <PayWrapper>pay</PayWrapper>
                        </Row>
                    </div>
                </MobileUserContent>
                <Description>
                    Boris Johnson is a conservative politician
                    and the current Prime Minister of the UK.
                </Description>
            </MobileUserWrapper>
            <SmallDevice>
                <FileMenu/>
                <div>
                    <Row className="items-center justify-center">
                        <UserImage>
                            <img src={ProfilePic} alt="profile-pic"/>
                        </UserImage>
                        <UserName onClick={"handleOpenModal"}>{"name"}</UserName>
                    </Row>
                </div>
                <div className="icons">
                    <CircleIcon imgUrl={ShareIcon} alt={"icon"}/>
                    <CircleIcon imgUrl={chat} alt={"icon"}/>
                    <LikeButton/>
                    <PayWrapper>pay</PayWrapper>
                    <PayWrapper>bio</PayWrapper>
                </div>
            </SmallDevice>
            <Separator> </Separator>
            <FooterContent>
                <QuizContent>
                    <div className='quiz-text'>
                        Will Boris Johnson win the next election?
                    </div>
                    <button className='quiz-btn no-btn'>No</button>
                    <button className='quiz-btn yes-btn'>Yes</button>

                </QuizContent>
                <CommentBtn>Leave a comment for Boris</CommentBtn>

                <FooterLink>
                    <NavLink to="#">Boris? Claim this Politician.link</NavLink>
                </FooterLink>
            </FooterContent>
        </UserContentWrapper>
    )
}

export default Politician;