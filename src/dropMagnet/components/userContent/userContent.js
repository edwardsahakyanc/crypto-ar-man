import React, {useState} from 'react';
import styled from "styled-components";
import CircleIcon from "../../styled-component/icon-wrapper";
import chat from "../../assets/chat.svg"
import {Row} from "../../styled-component/row";
import HeartAnim from '../../assets/likeanim.gif';
import HeartBefore from '../../assets/like_before.gif';
import HeartAfter from '../../assets/like_after.gif';
import ProfilePic from '../../assets/profile_pic.png';
import ShareIcon from "../../assets/share-icon.svg";
import UserSlider from "../userSlider/userSlider";

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
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 -3px 0 rgba(37, 37, 37, 0.5), inset 0 -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.5);
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
  @media(max-width: 500px){
    font-size: 20px;
  }
`;
const PayWrapper = styled.div`
  width: 52px;
  height: 52px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 -3px 0 rgba(37, 37, 37, 0.5), inset 0 -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.5);
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
  @media(max-width: 500px){
  width: 44px;
  height: 44px;
    font-size: 14px;
  }
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

const UserContent = () => {
    const [likeFrame, setLikeFrame] = useState(0);
    const doLike = () => {
        setLikeFrame(1);
        setTimeout(() => {
            setLikeFrame(2);
        }, 1200);
    }
    return (
        <div>
            <Row className="items-center justify-center">
                <CircleIcon imgUrl={chat} alt={"icon"}/>
                <UserImage>
                    <img src={ProfilePic} alt="profile-pic"/>
                </UserImage>
                <div>
                    {
                        likeFrame === 0 ?
                            <div onClick={() => doLike()}>
                                <CircleIcon imgUrl={HeartBefore} alt='like_before' className="heart-image"/>
                            </div>
                            : null
                    }
                    {
                        likeFrame === 1 ?
                            <div>
                                <CircleIcon imgUrl={HeartAnim} alt='like_animation' className="heart-image"/>
                            </div>
                            : null
                    }
                    {
                        likeFrame === 2 ?
                            <div onClick={()=>setLikeFrame(0)}>
                                <CircleIcon imgUrl={HeartAfter} alt='like_liked' className="heart-image" />
                            </div>
                            : null
                    }
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
            <UserSlider/>
        </div>
    )
}

export default UserContent