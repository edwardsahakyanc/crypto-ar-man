import React, {useState} from "react";
import FileMenu from "../../../myGallery/fileMenu/fileMenu";
import CircleIcon from "../newUserContent/styled-components/icon-wrapper";
import {Row} from "../../styled-component/row";
import message from "../../assets/message.svg";
import brownMessage from "../../assets/brownMessage.svg";
import ProfilePic from "../../assets/profile_pic.png";
import flag from "../../assets/United_Kingdom.svg.png";
import boris from "../../assets/boris.jpg";
import LikeButton from "../newUserContent/styled-components/likeButton";
import link from "../../assets/link.svg";
import brownLink from "../../assets/brownLink.svg";
import bitcoin from "../../assets/bitcoin.svg";
import brownBitcoin from "../../assets/brownBitcoin.svg";
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
    padding: 94px 10px 21px;
    position:relative;
    box-shadow: 0 -3px 4px rgba(0 0 0 / 19%);
    
    @media (max-width: 375px) and (max-height: 700px) {
     display: none;
    }
    
    &.light {
      background: #FCFCFC;
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
    box-shadow: 0 1 4 rgba(0, 0, 0, 0.25);
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
  padding: 8px 19px;  
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
  border: 0.75px solid #000000;
  border-radius: 23px;
  color: #EAEAEA;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 0 16px;
  cursor: pointer;
  
  &.light {
    color: #000000;
    background-image: linear-gradient(rgb(247, 247, 247), rgb(247, 247, 247));
    border: 1px solid #DFDFDF;
  }
  
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
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin-top: 16px;
  padding: 0 16px;
  
  &.light {
    color: #000000;
  }
  
  @media (max-width: 375px) and (max-height: 700px) {
        margin-top: 12px;
    }
`;

const UserContentWrapper = styled.div`
    width: 100%;
    height:100%;
    overflow: auto;
    background-color: #292929;
    
    &.light {
      background-color: #EEEEEE;
    }
`;

const QuizContent = styled.div`
    padding: 18px 22px;
    margin: 18px 35px 16px 35px;
    border-radius: 16px;
    color: #fff;
    background-image: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
    border: 0.75px solid #000000;
    font-size: 24px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &.light{
      background-image: linear-gradient(rgba(247, 247, 247), rgba(247, 247, 247));
      border: 1px solid #D6D6D6;
      box-shadow: 0 2px 4px rgba(195 195 195 / 50%);
      
      div {
        color: #000000;
      }
    }
    
    .quiz-text {
      margin: 7px 0 26px 0;
      font-size: 24px;
      text-align: center;
      font-weight: 400;
      padding: 0 12px;
    }
    
    .btn-wrap {
      display: flex;
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
      font-weight: 400;
      border: 0.75px solid #000000;
      
      &.light {
        background-image: linear-gradient(rgba(239, 239, 239, 0.27), rgba(239, 239, 239, 0.27));
        border: 1px solid #D6D6D6;
        box-shadow: 0 2px 4px #C3C3C3;
      }
    }
    
    .no-btn {
      background-image: linear-gradient(rgba(149, 65, 65, 0.83), rgba(149, 65, 65, 0.83));
      
      &.light {
         color: #954141;
      }
    }
    
    .yes-btn {
      background-image: linear-gradient(rgba(43, 103, 52, 0.83), rgba(43, 103, 52, 0.83));
      margin-left: 16px;
      
      &.light {
         color: #2B6734;
      }
    }
    
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & .light {
      // background-color: #EEEEEE;
    }
`;

const CommentBtn = styled.button`
      min-width: 248px;
      padding: 8px 22px;
      text-align: center;
      color: #D3D3D3;
      font-family: "Azo Sans", sans-serif;
      border: 0.75px solid #000000;
      outline: none;
      border-radius: 54.5px;
      font-size: 16px;
      margin: 0 auto;
      background: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
      
      &.light {
        background: linear-gradient(rgba(250, 250, 250, 0.99), rgba(250, 250, 250, 0.99));;
        border: 1px solid #D6D6D6;
        box-shadow: 0 1px 3px #C3C3C3;
        color: #363636;
      }
`

const FooterLink = styled.div`
     font-size: 12px;
     margin: 26px 0 24px 0; 
     
     a {
       color: #DFDFDF;
       text-decoration: none;
       font-family: "Azo Sans", sans-serif;
     }
     
     &.light {
       a {
         color: #9C9C9C;
         text-decoration: underline
       }
     }
`;

const Separator = styled.div`
    height: 9px;
    background: #141414;
    box-shadow: inset 0px 1px 3px rgb(0 0 0 / 50%);
    
    &.light {
     background: #D3D3D3;
     box-shadow: inset 0px 3px 4px rgb(0 0 0 / 50%);
    }
`;

const Politician = () => {

    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <UserContentWrapper className={darkTheme ? 'light' : ''}>
            <UserHeader> </UserHeader>
            <UserWrapper className={darkTheme ? 'light' : ''}>
                <LikeAndCommentWrapper>
                    <Row className="items-bottom justify-center">
                        <CircleIcon imgUrl={darkTheme ? brownMessage : message} alt={"icon"} className={darkTheme ? 'light' : ''}/>
                        <UserImage>
                            <img src={boris} alt="profile-pic" onClick={() => setDarkTheme(!darkTheme)}/>
                        </UserImage>
                        <div>
                            <LikeButton lightTheme={darkTheme ? 'light' : ''}/>
                        </div>
                    </Row>
                </LikeAndCommentWrapper>
                <Row className="items-center justify-center">
                    <CircleIcon imgUrl={darkTheme ? brownLink : link} alt={"icon"} className={darkTheme ? 'light' : ''}/>
                    <UserName className={darkTheme ? 'light' : ''}>Boris Johnson</UserName>
                    <CircleIcon imgUrl={darkTheme ? brownBitcoin : bitcoin} alt={"icon"} className={darkTheme ? 'light' : ''}/>
                    {/*<PayWrapper>pay</PayWrapper>*/}
                </Row>
                <Description className={darkTheme ? 'light' : ''}>
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
            <Separator className={darkTheme ? 'light' : ''}> </Separator>
            <FooterContent>
                <QuizContent className={darkTheme ? 'light' : ''}>
                    <div className={darkTheme ? 'light quiz-text' : 'quiz-text'}>
                        Will Boris Johnson win the next election?
                    </div>
                    <div className='btn-wrap'>
                        <button className={darkTheme ? 'light quiz-btn no-btn' : 'quiz-btn no-btn'}>No</button>
                        <button className={darkTheme ? 'light quiz-btn yes-btn' : 'quiz-btn yes-btn'} >Yes</button>
                    </div>

                </QuizContent>
                <CommentBtn className={darkTheme ? 'light' : ''}>Leave a comment for Boris</CommentBtn>

                <FooterLink className={darkTheme ? 'light' : ''}>
                    <NavLink to="#">Boris? Claim this Pbitolitician.link</NavLink>
                </FooterLink>
            </FooterContent>
        </UserContentWrapper>
    )
}

export default Politician;