import React, {useState} from 'react';
import styled from "styled-components";
import background from "../../assets/cat-background.png";
import arrowDown from "../../assets/arrowDown.png";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CircleIcon from "./styled-components/icon-wrapper";
import chat from "../../assets/chat.svg";
import ProfilePic from "../../assets/profile_pic.png";
import LikeButton from "./styled-components/likeButton";
import {Row} from "../../styled-component/row";
import ShareIcon from "../../assets/share-icon.svg";
import UserSlider from "../newUserSlider/newUserSlider";
import BlurModal from "../editNameModal/editNameModal";
import PortaledComponent from "../portaledComponent";

const UserHeader = styled.div`
    position: relative;
    width: 100%;
    min-height:183px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media(max-width: 391px){
    min-height: 137px;
    }
    @media(max-width: 376px){
    min-height: 116px;
    }
`;
const StyledDropDown = styled(Dropdown)`
    position: absolute;
    top:8px;
    left:15px;
    .Dropdown-control{
        min-width: 110px;
        height: 36px;
        background: #101010;
        border-radius: 100px;
        border: none;
        color: #d8d8d8;
        font-size: 16px;
        font-weight: 600;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: left;
        padding: 8px 30px 8px 12px;
        .Dropdown-arrow{
            border: none;
            background-image: url(${arrowDown});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 8px;
            width: 14px;
            transition: all 150ms ease;
        }
    }
    &.dropdown.is-open{
    .Dropdown-arrow{
            transition: all 150ms ease;
            transform: rotate(180deg);
        }
    }
    .Dropdown-menu{
        border-radius: 10px;
        background: #101010;
        border: none;
        box-shadow: none;
        margin-top: 0;
        .Dropdown-option{
            color: #d8d8d8;
            &.is-selected{
                font-weight:bold;
                background: #101010;
            }
        }
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
    &.active{
        background: linear-gradient(to right, #d600ff 0%, #6600ff 100%);;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const NewUserContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name,setName] = useState("Alexander Newton")
    const options = ['Mag.Link', 'Mag.Link 2', 'Mag.Link 3'];
    const defaultOption = options[0];

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }


    return (
        <div>
            <UserHeader>
                <StyledDropDown
                    className={"dropdown"}
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"/>;
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
                    <Tab>NFT Gallery</Tab>
                </PageLiks>
            </GreyBack>
            {/*{*/}
            {/*    isOpen*/}
            {/*        ?*/}
            {/*        <PortaledComponent modal={<BlurModal close={handleCloseModal} className={isOpen ? 'active' : ""} name={name} setName={setName}/>}/>*/}
            {/*        :*/}
            {/*        null*/}
            {/*}*/}
            <PortaledComponent modal={<BlurModal close={handleCloseModal} open={isOpen} className={isOpen ? 'active' : ""} name={name} setName={setName}/>}/>
        </div>
    )
}

export default NewUserContent