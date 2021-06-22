import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from 'swiper/core';
import styled from "styled-components";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "./newUserSlider.scss";
import {Row} from "../../styled-component/row";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import arrow from "../../assets/arrows.svg"
import NewMusicPlayer from "../musicPlayer/newMusicPlayer";

SwiperCore.use([Navigation, Pagination]);

const Slide1Items = [
    {id: 1, borderColor: "#ff9400", value: "Rarible"},
    {id: 2, borderColor: "#00b8ff", value: "OpenSea"},
    {id: 3, borderColor: "#ff5f00", value: "Instagram"},
    {id: 4, borderColor: "#00f1ff", value: "Twitter"},
    {id: 5, borderColor: "#afafaf", value: "Clubhouse"},
    {id: 6, borderColor: "#36b2f0", value: "Telegram"},
];

const SliderWrapper = styled.div`
     max-width: 530px;
     width: 100%;
     margin: 0 auto;
     height: fit-content;
     overflow: hidden;
     position: relative;
     padding-top: 24px;
     padding-bottom: 60px;
`;
const SlideImgItem = styled.div`
    width: 158px;
    height: 158px;
    overflow: hidden;
    margin: 0 10px;
    img{
    width: 100%;
    height: 100%;
    object-fit: content;
    }
    @media(max-width: 360px){
      width: 140px;
      height: 140px;
    }
`;
const Button = styled.button`
  min-width: 243px;
  min-height: 62px; 
  border-radius: 100px;
  border: 1px solid;
  background-color: transparent;
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 11.5px 10px;
  position:relative;
  overflow: hidden;
  cursor:pointer;
  @media (max-width: 530px){
  min-width: 165px;
  min-height: 42px;
  margin: 8px 7px;
  }
  @media(max-width: 360px){
  min-width: 150px;
  min-height: 40px;
  margin: 6px 4px;
  }
`;
const SliderPrev = styled.div`
     width: 8px;
     height:14px;
     background-image: url(${arrow});
     opacity:0.1;
     transform: rotate(180deg);
     position: absolute;
     bottom: 36px;
     left: calc(50% - 48px);
     z-index:10;
     cursor: pointer;
`;
const SliderNext = styled.div`
     width: 8px;
     height:14px;
     background-image: url(${arrow});
     opacity:0.1;
     position: absolute;
     bottom: 36px;
     right: calc(50% - 48px);
     z-index:10;
     cursor: pointer;
`;




const UserSlider = () => {
    const pagination = {
        "clickable": true,
        "renderBullet": (index, className) => {
            return '<span class=' + className + '></span>';
        }
    }
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <SliderWrapper>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                pagination={pagination}
                className="userSwiper"
                spaceBetween={30}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        swiper.params.navigation.nextEl = navigationNextRef.current
                        swiper.navigation.destroy()
                        swiper.navigation.init()
                        swiper.navigation.update()
                    })
                }}
            >
                <SliderPrev ref={navigationPrevRef} />
                <SwiperSlide className="slide-item">
                    <Row className="items-center justify-center flex-wrap">
                        {
                            Slide1Items.map(button => {
                                return (
                                    <Button key={button.id} style={{borderColor: `${button.borderColor}`}}>
                                        {button.value}
                                    </Button>
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
                    <NewMusicPlayer/>
                </SwiperSlide>
                <SliderNext ref={navigationNextRef} />
            </Swiper>
        </SliderWrapper>
    )
}

export default UserSlider