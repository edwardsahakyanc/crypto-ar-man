import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper/core';
import styled from "styled-components";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "./userSlider.scss";
import {Row} from "../../styled-component/row";
import StyledButton from "../../styled-component/button";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import playerBackground from "../../assets/player-background.png";
import playBtn from "../../assets/play-btn.svg"

SwiperCore.use([Navigation]);
const Slide1Items = [
    {id: 1, borderColor: "#ff9400", value: "Rarible"},
    {id: 2, borderColor: "#00b8ff", value: "OpenSea"},
    {id: 3, borderColor: "#ff5f00", value: "Instagram"},
    {id: 4, borderColor: "#00f1ff", value: "Twitter"},
    {id: 5, borderColor: "#afafaf", value: "Clubhouse"},
    {id: 6, borderColor: "#36b2f0", value: "Telegram"},
];

const SliderWrapper = styled.div`
     max-width: 1200px;
     width: 100%;
     margin: 0 auto;
     height: fit-content;
`;

const SlideImgItem = styled.div`
    width: 143px;
    height: 143px;
    border-radius: 6px;
    overflow: hidden;
    margin: 0 14.5px;
    img{
    width: 100%;
    height: 100%;
    object-fit: content;
    }
    @media(max-width: 500px){
    width: 100px;
    height: 100px;
    margin: 5px 10px;
    }
`;
const MusicPlayerWrapper = styled.div`
  max-width: 344px;
  width: 100%;
  height: 143px;
  border-radius: 11px;
  border: 1px solid #6f4b8f;
  background-color: #d8d8d8;
  background-image: url(${playerBackground});
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MusicSecond = styled.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  padding: 9px 15px 11px 24px;
  border-radius: 11px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  width: fit-content;
  margin: 0 0 0 auto;
  @media(max-width: 420px){
   font-size: 14px;
  }
`;
const MusicName = styled.p`
 color: #f3f3f3;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: right;
  padding: 13px 15px 11px 24px;
  border-radius: 11px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0;
  @media(max-width: 420px){
   font-size: 16px;
  }
`;
const MusicPlayBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 28px;
    width: 89px;
    height: 89px;
    box-shadow: 0 6px 13px rgba(0, 0, 0, 0.5), inset 0 4px 6px rgba(0, 0, 0, 0.5);
    background-color: #202020;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img{
      width: 34px;
      height: 35px;
      object-fit: contain;
    }
    @media(max-width: 420px){
    width: 70px;
    height: 70px;
    }
`;


const UserSlider = () => {
    return (
        <SliderWrapper>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                navigation={true}
                className="userSwiper"
            >
                <SwiperSlide className="slide-item">
                    <Row className="items-center justify-center flex-wrap">
                        {
                            Slide1Items.map(button => {
                                return (
                                    <StyledButton key={button.id} borderColor={button.borderColor}>
                                        {button.value}
                                    </StyledButton>
                                )
                            })
                        }
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <Row className="items-center justify-center flex-wrap">
                        <SlideImgItem>
                            <img src={cat1} alt=""/>
                        </SlideImgItem>
                        <SlideImgItem>
                            <img src={cat2} alt=""/>
                        </SlideImgItem>
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <MusicPlayerWrapper>
                        <MusicSecond>
                            30 second preview
                        </MusicSecond>
                        <MusicName>
                            I Wanna Be A Spaceman
                        </MusicName>
                        <MusicPlayBtn>
                            <img src={playBtn} alt="playBtn"/>
                        </MusicPlayBtn>
                    </MusicPlayerWrapper>
                </SwiperSlide>
            </Swiper>
        </SliderWrapper>
    )
}

export default UserSlider