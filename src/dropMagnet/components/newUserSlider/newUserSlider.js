import React, {useEffect, useRef} from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper/core';

import ContectGreySection from "../contectGreySection/ContectGreySection";
import CircleIcon from "../newUserContent/styled-components/icon-wrapper";
import NewMusicPlayer from "../musicPlayer/newMusicPlayer";
import {Row} from "../../styled-component/row";
import arrow from "../../assets/arrows.svg";
import discord from "../../assets/Discord.svg";
import telegram from "../../assets/Telegram.svg";
import openSea from "../../assets/Open Sea.svg";
import rarible from "../../assets/Rarible.svg";
import instagram from "../../assets/Instagram.svg";
import blackDiscord from "../../assets/BlackDiscord.svg";
import blackTelegram from "../../assets/BlackTelegram.svg";
import blackOpenSea from "../../assets/BlackOpen Sea.svg";
import blackRarible from "../../assets/BlackRarible.svg";
import blackInstagram from "../../assets/blackInstagram.svg";
import styled from "styled-components";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import './newUserSlider.scss';

SwiperCore.use([Pagination, Navigation]);

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

    @media(max-width: 440px){
      width: 146px;
      height: 146px;
    }

    @media(max-width: 360px){
      width: 140px;
      height: 140px;
    }
`;

const SliderWrapp = styled.div`
    margin: 16px;
    
    @media (max-width: 370px) {
       margin: 16px 8px; 
    }
`;

const SocialMediaLinks = styled.div`
    max-width: 342px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
`;

const SliderPrev = styled.div`
     width: 8px;
     height:14px;
     background-image: url(${arrow});
     // opacity:0.1;
     transform: rotate(180deg);
     position: absolute;
     left: calc(50% - 48px);
     z-index:10;
     cursor: pointer;
     bottom: 96px;
`;
const SliderNext = styled.div`
     width: 8px;
     height:14px;
     background-image: url(${arrow});
     // opacity:0.1;
     position: absolute;
     right: calc(50% - 48px);
     z-index:10;
     cursor: pointer;
     bottom: 96px;
`;

const FeaturedContent = styled.div`
    border: 1px solid transparent;
    position: relative;
    border-radius: 12px;
    max-width: 351px;
    margin: 0 auto;
    div {
      &.edited-text {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        border-radius: 12px;    
        background-image: linear-gradient(rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%);
        backdrop-filter: blur(4px);
        color: #EAEAEA;
        font-size: 24px;
        font-weight: 400;
        z-index: 1000;
        
        ::after {
        content: "Edit Featured Content";
       }
      }
            
      &.edited-text-active {
        display: flex;
        justify-content: center;
        align-items: center;
      }  
    }

`;

const UserSlider = ({darkTheme, editedActive, setFeaturedContentModal}) => {
    const swiperRef = useRef();
    const pagination = {
        "clickable": false,
        "renderBullet": (index, className) => {
            return '<span class=' + className + '> </span>';
        }
    }
    useEffect(() => {
        editedActive ? swiperRef.current.swiper.disable() : swiperRef.current.swiper.enable();
        // swiperRef.current.swiper.disable();
    },[editedActive, swiperRef])
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <>
            <Swiper
                slidesPerView={1}
                slidesPerColumn={1}
                spaceBetween={30}
                initialSlide={editedActive ? 1 : undefined }
                // hideOnClick={false}
                // centeredSlides={true}
                // enabled={true}
                // noSwiping={true}
                // enabled={false}
                ref={swiperRef}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                pagination={pagination}

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
                <SliderPrev ref={navigationPrevRef}/>
                <SwiperSlide>
                    <SliderWrapp>
                        <FeaturedContent onClick={() => editedActive && setFeaturedContentModal(true)}>
                            <div className={`${editedActive}`}> </div>
                            <ContectGreySection content='My latest movie “Beautiful Blue Eyes”' styles={`${darkTheme && 'light'}`} />
                            <ContectGreySection
                                styles={`${darkTheme && 'light'}`}
                                content={<>My special merch for <span className='nft'>NFT</span> holders!</>}
                                />

                            <SocialMediaLinks>
                                <CircleIcon imgUrl={darkTheme ? blackDiscord : discord} alt={"icon"} className={`${darkTheme && 'light'} social-media`}/>
                                <CircleIcon imgUrl={darkTheme ? blackTelegram : telegram} alt={"icon"} className={`${darkTheme && 'light'} social-media`}/>
                                <CircleIcon imgUrl={darkTheme ? blackOpenSea : openSea} alt={"icon"} className={`${darkTheme && 'light'} social-media`}/>
                                <CircleIcon imgUrl={darkTheme ? blackRarible : rarible} alt={"icon"} className={`${darkTheme && 'light'} social-media`}/>
                                <CircleIcon imgUrl={darkTheme ? blackInstagram : instagram} alt={"icon"} className={`${darkTheme && 'light'} social-media`}/>
                            </SocialMediaLinks>
                        </FeaturedContent>
                    </SliderWrapp>
                </SwiperSlide>
                {!editedActive && <>
                    <SwiperSlide>
                        <SliderWrapp>
                            <Row>
                                <SlideImgItem>
                                    <img src={cat1} alt=""/>
                                </SlideImgItem>
                                <SlideImgItem>
                                    <img src={cat2} alt=""/>
                                </SlideImgItem>
                            </Row>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderWrapp>
                            <NewMusicPlayer/>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderWrapp>
                            <Row>
                                <SlideImgItem>
                                    <img src={cat1} alt=""/>
                                </SlideImgItem>
                                <SlideImgItem>
                                    <img src={cat2} alt=""/>
                                </SlideImgItem>
                            </Row>
                        </SliderWrapp>
                    </SwiperSlide>
                </>}
                <SliderNext ref={navigationNextRef}/>
            </Swiper>
        </>
    )
}

export default UserSlider;