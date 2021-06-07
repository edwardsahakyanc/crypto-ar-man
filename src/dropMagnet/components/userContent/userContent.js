import React from 'react';
import styled from "styled-components";
import CircleIcon from "../../styled-component/icon-wrapper";
import chat from "../../assets/chat.svg"
import {Row} from "../../styled-component/row";
import ProfilePic from '../../assets/profile_pic.png';
import ShareIcon from "../../assets/share-icon.svg";
import UserSlider from "../userSlider/userSlider";
import {Container} from "../../styled-component/container";
import LikeButton from "../../styled-component/likeButton";

const UserImage = styled.div`
  width: 164px;
  height: 164px;
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
  border-radius: 1000px;
  margin: 0 16px 24px;
  img{
   width: 100%;
   height: 100%;
  }
`;
const UserName = styled.p`
  padding: 11px 16px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), inset 0 0 4px rgba(0, 0, 0, 0.5), inset 0 -3px 0 rgba(37, 37, 37, 0.5), inset 0 -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 26px;
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
  color: #eaeaea;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 0 16px;
`;
const PayWrapper = styled.div`
  width: 52px;
  height: 52px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), inset 0 0 4px rgba(0, 0, 0, 0.5), inset 0 -3px 0 rgba(37, 37, 37, 0.5), inset 0 -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
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
const Description = styled.p`
  color: #eaeaea;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 25px 0;
`;
const SmartGalleryBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text:align: center;
  width: 268px;
  height: 46px;
  margin: 0 auto;
  background: transparent;
  outline: none !important;
  border: 1px solid #5502d0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 -3px 0 rgba(37, 37, 37, 0.5), inset 0 -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 26px;
  background-color:transparent;
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
  color: #eaeaea;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  cursor: pointer;
  margin-top: 24px;
  position:relative;
  overflow: hidden;
  &:after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.5);
    opacity: 0.81;
  }
`;

const UserContentWrapper = styled.div`
    background: #1a1a1a;
    padding-bottom: 36px;
`

const UserContent = () => {
    return (
        <UserContentWrapper>
            <Container>
                <Row className="items-center justify-center">
                    <CircleIcon imgUrl={chat} alt={"icon"}/>
                    <UserImage>
                        <img src={ProfilePic} alt="profile-pic"/>
                    </UserImage>
                    <div>
                        <LikeButton/>
                    </div>
                </Row>
                <Row className="items-center justify-center">
                    <CircleIcon imgUrl={ShareIcon} alt={"icon"}/>
                    <UserName>Crypto Art Man</UserName>
                    <PayWrapper>pay</PayWrapper>
                </Row>
                <Description>
                    I’m a crypto artist. I’ve been collecting NFTs
                    since 2017, and I also created Drop Magnet.
                </Description>
            </Container>
            <UserSlider/>
            <SmartGalleryBtn>
                Smart Gallery
            </SmartGalleryBtn>
        </UserContentWrapper>
    )
}

export default UserContent