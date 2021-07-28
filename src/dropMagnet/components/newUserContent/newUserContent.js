import React, {useState} from 'react';
import styled from "styled-components";
import background from "../../assets/cat-background.png";
import CircleIcon from "./styled-components/icon-wrapper";
import chat from "../../assets/chat.svg";
// import setting from "../../assets/settings-2.svg";
// import blackSetting from "../../assets/settings-black.svg";
// import edit from "../../assets/edit.svg";
// import blackEdit from "../../assets/blackEdit.svg";
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
import ShareModal from "../sharingIconsModal";
import EditUserDescription from "../editUserDescriptionModal";
import FeaturedContent from "../FeaturedContentModal";
import ImageUpdateModal from "../ImageUpdateModal";
import blackSetting from "../../assets/settings-black.svg";
import setting from "../../assets/settings-2.svg";
// import ScrollSnapPage from "../../pages/scrollSnapPage/ScrollSnapPage";

const UserHeader = styled.div`
    position: relative;
    width: 100%;
    max-height: 183px;
    height: 100%;
    min-height: 96px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (max-width: 500px){
    height: 356px;
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
    background-color: #1A1A1A;
    padding: 91px 10px 16px;
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
  // height: 46px;
  line-height: 24px;
  padding: 13px 0 9px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
  border: 0.75px solid #000000;
  border-radius: 26px;
  color: #EAEAEA;
  text-align: center;
  margin: 0 16px;
  cursor: pointer;
  
  &.light {
    background-image: linear-gradient(rgb(247, 247, 247), rgb(247, 247, 247));
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
  color: #eaeaea;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 0 auto;
  padding-top: 24px;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  .hide-text{ 
    //white-space: nowrap;     
  }    
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

const HeaderEditText = styled.span`
    color: #EAEAEA;
    font-size: 16px; 
    font-weight: 400;
    position: absolute;
    right: 31px;
    top: 25px;
    
    @media screen and (max-width: 390px) {
      right: 21px;
    }
    
    @media screen and (max-width: 390px) {
      right: 4px;
    }
`;

const Separator = styled.div`
    height: 9px;
    background: #141414;
    box-shadow: inset 1px 3px 0 rgb(0 0 0 / 50%);
    
    &.light {
     background: #D3D3D3;
     box-shadow: inset 0px 3px 4px rgb(0 0 0 / 50%);
    }
`;

const HeaderIcon = styled.div`
    position: fixed;
    z-index: 0;
    left: 185px;
    top: 16px;
`;

const NewUserContent = (props) => {
    const { darkTheme } = props;
    const [editedActive, setEditedActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Alexander Newton");
    // const [activeTab, setActiveTab] = useState(1);
    const [shareIsOpen, setShareIsOpen] = useState(false);

    const [userDescription, setUserDescription] = useState(`I’m a crypto artist. I’ve been collecting NFTs since 2017, and I also created Drop Magnet.`);
    const [editUserDescription, setEditUserDescription] = useState(false);

    const [featuredContentModal, setFeaturedContentModal] = useState(false);

    const [imageUpdateModalToggle, setImageUpdateModalToggle] = useState(false)

    const closeModal = () => {
        setShareIsOpen(false);
        setEditUserDescription(false);
        setFeaturedContentModal(false);
        setImageUpdateModalToggle(false);
    }
    const openShareModal = () => {
        setShareIsOpen(true)
    }

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
                <HeaderIcon key='2342234' onClick={() => {
                    setEditedActive(!editedActive)
                }}>
                    <CircleIcon imgUrl={darkTheme ? blackSetting : setting} alt={"icon"} className={darkTheme ? 'header-edit' : 'header-edit-black'}/>
                </HeaderIcon>

                {
                    editedActive
                        ? <div onClick={() => setImageUpdateModalToggle(true)}>
                            <HeaderEditText>Edit Header & BGs</HeaderEditText>
                          </div>
                        : null
                }
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
                    <div onClick={openShareModal}>
                        <CircleIcon imgUrl={darkTheme ? blackLink : link} alt={"icon"} className={darkTheme ? 'light' : ''} />
                    </div>
                    <UserName onClick={handleOpenModal} className={darkTheme ? 'light' : ''}>{name}</UserName>
                    <CircleIcon imgUrl={darkTheme ? blackBitcoin : bitcoin} alt={"icon"} className={darkTheme ? 'light bitcoin' : 'bitcoin'} />
                    {/*<PayWrapper>pay</PayWrapper>*/}
                </Row>
                <Description className={darkTheme ? 'light' : ''} onClick={() => setEditUserDescription(!editUserDescription)}>
                    <div>
                        {userDescription}
                    </div>
                </Description>
            </UserWrapper>
            <MobileUserWrapper>
                <MobileUserContent>
                    {/*<FileMenu darkTheme={darkTheme}/>*/}
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
                <div>
                    <Description>
                        I’m a crypto artist. I’ve been collecting NFTs
                        since 2017, and I also created Drop Magnet.
                    </Description>
                </div>
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
                <UserSlider
                    darkTheme={darkTheme}
                    editedActive={`${ editedActive ? 'edited-text edited-text-active' : ''}`}
                    setFeaturedContentModal={setFeaturedContentModal}
                />
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
            <EditUserDescription
                isOpen={editUserDescription}
                closeModal={closeModal}
                userDescription={userDescription}
                setUserDescription={setUserDescription}
            />
            <FeaturedContent isOpen={featuredContentModal} closeModal={closeModal}/>
            <ShareModal isOpen={shareIsOpen} closeModal={closeModal}/>
            <ImageUpdateModal isOpen={imageUpdateModalToggle} closeModal={closeModal}/>
        </UserContentWrapper>
    )
}

export default NewUserContent;