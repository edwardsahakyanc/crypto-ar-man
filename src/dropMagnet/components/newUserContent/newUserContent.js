import React, {useState} from 'react';
import styled from "styled-components";
import background from "../../assets/cat-background.png";
import CircleIcon from "./styled-components/icon-wrapper";
import chat from "../../assets/chat.svg";
import edit from "../../assets/edit.svg";
import blackEdit from "../../assets/blackEdit.svg";
import link from "../../assets/link.svg";
import bitcoin from "../../assets/bitcoin.svg";
import message from "../../assets/message.svg";
import blackLink from "../../assets/blackLink.svg";
import blackBitcoin from "../../assets/blackBitcoin.svg";
import blackMessage from "../../assets/blackMessage.svg";
// import userLogo from "../../assets/profile.svg";
import ProfilePic from "../../assets/profile_pic.png";
import LikeButton from "./styled-components/likeButton";
import {Row} from "../../styled-component/row";
import ShareIcon from "../../assets/share-icon.svg";
import UserSlider from "../newUserSlider/newUserSlider";
import BlurModal from "../editNameModal/editNameModal";
import PortaledComponent from "../portaledComponent";
import FileMenu from "../../../myGallery/fileMenu/fileMenu";
import PageLiksComponent from "../pageLiks/PageLiks";

const UserHeader = styled.div`
    position: relative;
    width: 100%;
    max-height: 278px;
    height: 100%;
    min-height: 96px;
    background-image: url(${background});
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
    background-color: #1a1a1a;
    padding: 94px 10px 21px;
    position:relative;
    box-shadow: 0 -7px 10px rgba(28,28,28, .33);
    
    &.light {
      background-color: #FCFCFC;
      box-shadow: 0 -10px 10px rgba(0 0 0 / 16%);
    }
    
    @media (max-width: 375px) and (max-height: 700px) {
     display: none;
    }
`;
const MobileUserWrapper = styled.div`
    display: none;
    background-color: #1a1a1a;
    padding-bottom: 12px;
    
    &.light {
      background-color: #FCFCFC;
      box-shadow: 0 -10px 10px rgba(0 0 0 / 16%); 
    }
    
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
  width: 164px;
  height: 164px;
  margin: 0 14px 4px;
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
  border-radius: 1000px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 375px) and (max-height: 700px) {
        width: 87px;
        height: 87px;
        margin: 3px 11px 0 13px;
    }
    @media (max-width: 350px) and (max-height: 650px) {
        width: 36px;
        height: 36px;
        margin: 0 19px 0 0;
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
  border: 1px solid #101010;
  border-radius: 100px;
  color: #eaeaea;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 0 8px;
  cursor: pointer;
  
  &.light {
    background-color: #FCFCFC;
    border: 1px solid #DFDFDF;
    color: #000000;
    font-weight: 500;  
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
  
  &.light {
   font-weight: 400;
   color: #000000;  
  }
  
  @media (max-width: 375px) and (max-height: 700px) {
        margin-top: 12px;
    }
`;
const GreyBack = styled.div`
  // padding: 32px 36px 0px 36px;
  
`;
// const PageLiks = styled.div`
//   max-width: 122px;
//   height: 36px;
//   border-radius: 55px;
//   background-color: #101010;
//   border: 1px solid #101010;
//   margin: 0 auto;
//   padding: 21px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: fixed;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
//   z-index: 10;
//   bottom: 20px;
//
//   &.light {
//     background-color: #F7F7F7;
//     border: 1px solid #D6D6D6;
//     box-shadow: 0 2px 4px #C3C3C3;
//   }
//
//   img {
//     position: relative;
//     bottom: -3px
//   }
// `;
// const Tab = styled.p`
//     font-size: 21px;
//     font-weight: 900;
//     font-style: italic;
//     color: #ffffff;
//     font-style: normal;
//     letter-spacing: normal;
//     line-height: normal;
//     text-align: center;
//     margin: 0;
//     cursor: pointer;
//
//     &.nft {
//       font-style: italic;
//     }
//
//     &.light {
//       color: #5F5F5F;
//     }
//
//     &.active{
//         background: linear-gradient(to right, #d600ff 0%, #6600ff 100%);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//     }
// `;
const UserContentWrapper = styled.div`
    width: 100%;
    height:100%;
    overflow: auto;
    background-color: #292929;
    
    &.light {
      background-color: #EEEEEE;
    }
`;
const HeaderIcon = styled.div`
    position: absolute;
    font-family: "Azo Sans", sans-serif;
    left: 193px;
    top: 16px
`;

const Separator = styled.div`
    height: 9px;
    background: #141414;
    
    &.light {
     background: #D3D3D3;
     box-shadow: inset 0px 3px 4px rgb(0 0 0 / 50%);
    }
`;

const HeaderTop = styled.div`
  height: 68px;
  position: fixed;
  z-index: 9999;
  top: 0;
`;

const NewUserContent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Alexander Newton");
    // const [activeTab, setActiveTab] = useState(1);

    const [darkTheme, setDarkTheme] = useState(false);

    const handleOpenModal = () => {
        document.querySelector("body").style.overflow = "hidden";
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        document.querySelector("body").style.overflow = "auto";
        setIsOpen(false);
    };

    return (
        <UserContentWrapper className={darkTheme ? 'light' : ''}>
            <UserHeader>
                <HeaderTop>
                    <FileMenu darkTheme={darkTheme}/>
                </HeaderTop>
                <HeaderIcon onClick={() => setDarkTheme(!darkTheme)}>
                    <CircleIcon imgUrl={darkTheme ? blackEdit : edit} alt={"icon"} className={darkTheme ? 'light header-edit' : 'header-edit'}/>
                </HeaderIcon>
            </UserHeader>
            <UserWrapper className={darkTheme ? 'light' : ''}>
                <LikeAndCommentWrapper>
                    <Row className="items-bottom justify-center">
                        <CircleIcon imgUrl={darkTheme ? blackMessage : message} alt={"icon"} className={darkTheme ? 'light' : ''} />
                        <UserImage>
                            <img src={ProfilePic} alt="profile-pic"/>
                        </UserImage>
                        <div>
                            <LikeButton lightTheme={darkTheme ? 'light black' : ''}/>
                        </div>
                    </Row>
                </LikeAndCommentWrapper>
                <Row className="items-center justify-center">
                    <CircleIcon imgUrl={darkTheme ? blackLink : link} alt={"icon"} className={darkTheme ? 'light' : ''} />
                    <UserName onClick={handleOpenModal} className={darkTheme ? 'light' : ''}>{name}</UserName>
                    <CircleIcon imgUrl={darkTheme ? blackBitcoin : bitcoin} alt={"icon"} className={darkTheme ? 'light' : ''} />
                    {/*<PayWrapper>pay</PayWrapper>*/}
                </Row>
                <Description className={darkTheme ? 'light' : ''}>
                    I’m a crypto artist. I’ve been collecting NFTs
                    since 2017, and I also created Drop Magnet.
                </Description>
            </UserWrapper>
            <MobileUserWrapper>
                <MobileUserContent>
                    <FileMenu darkTheme={darkTheme}/>
                    <UserImage>
                        <img src={ProfilePic} alt="profile-pic"/>
                    </UserImage>
                    <div>
                        <UserName onClick={handleOpenModal}>{name}</UserName>
                        <Row className="items-center justify-between">
                            <CircleIcon imgUrl={ShareIcon} alt={"icon"}/>
                            <CircleIcon imgUrl={chat} alt={"icon"}/>
                            <LikeButton/>
                            <PayWrapper>pay</PayWrapper>
                        </Row>
                    </div>
                </MobileUserContent>
                <Description>
                    I’m a crypto artist. I’ve been collecting NFTs
                    since 2017, and I also created Drop Magnet.
                </Description>
            </MobileUserWrapper>
            <SmallDevice>
                <FileMenu darkTheme={darkTheme}/>
                <div>
                    <Row className="items-center justify-center">
                        <UserImage>
                            <img src={ProfilePic} alt="profile-pic"/>
                        </UserImage>
                        <UserName onClick={handleOpenModal}>{name}</UserName>
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
            <GreyBack>
                <UserSlider darkTheme={darkTheme}/>
                {/*<PageLiks className={darkTheme ? 'light' : ''}>*/}
                {/*    <Tab className={"active"} onClick={scrollToCover}>*/}
                {/*        <img src={userLogo} alt="user logo"/>*/}
                {/*    </Tab>*/}
                {/*    <Tab className={darkTheme ? 'light nft' : 'nft'} onClick={scrollToGallery}>NFTs</Tab>*/}
                {/*</PageLiks>*/}
                <PageLiksComponent darkTheme={darkTheme} props={props} userComponentStyles='user-component-styles'/>
            </GreyBack>
            <PortaledComponent
                modal={
                    <BlurModal
                        close={handleCloseModal}
                        open={isOpen}
                        className={isOpen ? 'active' : ""}
                        name={name}
                        setName={setName}/>
                }/>
        </UserContentWrapper>
    )
}

export default NewUserContent