import React, {useState} from 'react';
import styled from "styled-components";
import background from "../../assets/cat-background.png";
import CircleIcon from "./styled-components/icon-wrapper";
import chat from "../../assets/chat.svg";
import ProfilePic from "../../assets/profile_pic.png";
import LikeButton from "./styled-components/likeButton";
import {Row} from "../../styled-component/row";
import ShareIcon from "../../assets/share-icon.svg";
import UserSlider from "../newUserSlider/newUserSlider";
import BlurModal from "../editNameModal/editNameModal";
import PortaledComponent from "../portaledComponent";
import Dropdown from "../dropdown/dropdown";

const UserHeader = styled.div`
    position: relative;
    width: 100%;
    height: 278px;
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
    
`;

const UserWrapper = styled.div`
    border-top: 4px solid #101010;
    border-bottom: 4px solid #101010;
    background: transparent;
    padding: 93px 10px 19px;
    position:relative;
`;
const UserImage = styled.div`
  width: 164px;
  height: 164px;
  margin: 0 14px 4px;
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
  border-radius: 1000px;
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
`;
const GreyBack = styled.div`
  height: 100%;
  background-color: #292929;
  padding-bottom: 20px;
`;
const PageLiks = styled.div`
  width: 248px;
  height: 36px;
  border-radius: 55px;
  background-color: #101010;
  margin: 0 auto;
  padding: 8px 16px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;
const Tab = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    margin: 0;
    cursor: pointer;
    &.active{
        background: linear-gradient(to right, #d600ff 0%, #6600ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const UserContentWrapper = styled.div`
    width: 100%;
    height:100%;
`;

const NewUserContent = ({handleSlideNext}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("Alexander Newton");
    const options = [
        {id:1, label: 'Mag.Link'},
        {id:2, label: 'Mag.Link 2'},
        {id:3, label: 'Mag.Link 3'},
    ];

    const handleOpenModal = () => {
        document.querySelector("body").style.overflow = "hidden";
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        document.querySelector("body").style.overflow = "auto";
        setIsOpen(false);
    }


    return (
        <UserContentWrapper>
            <UserHeader>
                <Dropdown data={options} />
            </UserHeader>
            <UserWrapper>
                <LikeAndCommentWrapper>
                    <Row className="items-bottom justify-center">
                        <CircleIcon imgUrl={chat} alt={"icon"}/>
                        <UserImage>
                            <img src={ProfilePic} alt="profile-pic"/>
                        </UserImage>
                        <div>
                            <LikeButton/>
                        </div>
                    </Row>
                </LikeAndCommentWrapper>
                <Row className="items-center justify-center">
                    <CircleIcon imgUrl={ShareIcon} alt={"icon"}/>
                    <UserName onClick={handleOpenModal}>{name}</UserName>
                    <PayWrapper>pay</PayWrapper>
                </Row>
                <Description>
                    I’m a crypto artist. I’ve been collecting NFTs
                    since 2017, and I also created Drop Magnet.
                </Description>
            </UserWrapper>
            <GreyBack>
                <UserSlider/>
                <PageLiks>
                    <Tab className="active">Cover Page</Tab>
                    <Tab onClick={handleSlideNext} className="nextEl">NFT Gallery</Tab>
                </PageLiks>
            </GreyBack>
            <PortaledComponent
                modal={
                    <BlurModal
                        close={handleCloseModal}
                        open={isOpen}
                        className={isOpen ? 'active' : ""} name={name}
                        setName={setName}/>
                }/>
        </UserContentWrapper>
    )
}

export default NewUserContent