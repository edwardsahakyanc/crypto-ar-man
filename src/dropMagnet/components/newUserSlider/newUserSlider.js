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
import CircleIcon from "../newUserContent/styled-components/icon-wrapper";
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

SwiperCore.use([Navigation, Pagination]);

// const Slide1Items = [
//     {id: 1, borderColor: "#ff9400", value: "Rarible"},
//     {id: 2, borderColor: "#00b8ff", value: "OpenSea"},
//     {id: 3, borderColor: "#ff5f00", value: "Instagram"},
//     {id: 4, borderColor: "#00f1ff", value: "Twitter"},
//     {id: 5, borderColor: "#afafaf", value: "Clubhouse"},
//     {id: 6, borderColor: "#36b2f0", value: "Telegram"},
// ];

const SliderWrapper = styled.div`
     max-width: 530px;
     width: 100%;
     margin: 0 auto;
     height: fit-content;
     overflow: hidden;
     position: relative;
     padding-top: 32px;
     padding-bottom: 70px;
     @media (max-height: 700px){
        max-width: 450px;
     }
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
    
    @media(max-width: 440px){
      width: 146px;
      height: 146px;
    }
    
    @media(max-width: 360px){
      width: 140px;
      height: 140px;
    }
`;
// const Button = styled.button`
//   min-width: 243px;
//   min-height: 62px;
//   border-radius: 100px;
//   border: 1px solid;
//   background-color: transparent;
//   background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
//   cursor: pointer;
//   color: #ffffff;
//   font-size: 18px;
//   font-weight: 700;
//   font-style: normal;
//   letter-spacing: normal;
//   line-height: normal;
//   text-align: center;
//   margin: 11.5px 10px;
//   position:relative;
//   overflow: hidden;
//   cursor:pointer;
//   @media (max-width: 530px){
//   min-width: 165px;
//   min-height: 42px;
//   margin: 8px 7px;
//   }
//   @media(max-width: 360px){
//   min-width: 142px;
//   min-height: 33px;
//   margin: 6px 6.5px;
//   }
//   @media (max-height: 700px) and (min-width: 1024px){
//       min-width: 142px;
//       min-height: 33px;
//       margin: 6px 6.5px;
//   }
// `;
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
const SocialMediaLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 36px;
`;
const UserContentListDescription = styled.div`
    font-size: 18px;
    color: #fff;
    text-align: center;
    // margin-bottom: 16px;
    background-color: #000000;
    border: 1px solid #000000;
    padding: 10px 0;
    border-radius: 9px;
    font-family: Azo Sans;
    margin: 0 36px 16px 36px;
    font-weight: 400;
    
    .nft {
      font-style: italic;
      font-weight: 600;
    }
    
    &.light {
      background-color: #F7F7F7;
      border: 1px solid #D6D6D6;
      box-shadow: 0 2px 4px #C3C3C3;
      color: #000000;
    }
`;

const UserSlider = ({darkTheme}) => {

    const pagination = {
        "clickable": true,
        "renderBullet": (index, className) => {
            return '<span class=' + className + '> </span>';
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
                    {/*<Row className="items-center justify-center flex-wrap">*/}
                    {/*    {*/}
                    {/*        Slide1Items.map(button => {*/}
                    {/*            return (*/}
                    {/*                <Button key={button.id} style={{borderColor: `${button.borderColor}`}}>*/}
                    {/*                    {button.value}*/}
                    {/*                </Button>*/}
                    {/*            )*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</Row>*/}
                    <UserContentListDescription className={darkTheme ? 'light' : ''} >
                        My latest movie “Beautiful Blue Eyes”
                    </UserContentListDescription>

                    <UserContentListDescription className={darkTheme ? 'light' : ''} >
                        My special merch for <span className='nft'>NFT</span> holders!
                    </UserContentListDescription>

                    <SocialMediaLinks>
                        <CircleIcon imgUrl={darkTheme ? blackDiscord : discord} alt={"icon"} className={darkTheme ? 'light social-media' : 'social-media'} />
                        <CircleIcon imgUrl={darkTheme ? blackTelegram : telegram} alt={"icon"} className={darkTheme ? 'light social-media' : 'social-media'} />
                        <CircleIcon imgUrl={darkTheme ? blackOpenSea : openSea} alt={"icon"} className={darkTheme ? 'light social-media' : 'social-media'} />
                        <CircleIcon imgUrl={darkTheme ? blackRarible : rarible} alt={"icon"} className={darkTheme ? 'light social-media' : 'social-media'} />
                        <CircleIcon imgUrl={darkTheme ? blackInstagram : instagram} alt={"icon"} className={darkTheme ? 'light social-media' : 'social-media'} />
                    </SocialMediaLinks>
                </SwiperSlide>
                <SwiperSlide className={`${darkTheme ? 'light' : ''} slide-item`}>
                    <Row className="items-center justify-center flex-wrap">
                        <SlideImgItem>
                            <img src={cat1} alt=""/>
                        </SlideImgItem>
                        <SlideImgItem>
                            <img src={cat2} alt=""/>
                        </SlideImgItem>
                    </Row>
                </SwiperSlide>
                <SwiperSlide className={`${darkTheme ? 'light' : ''} slide-item`}>
                    <NewMusicPlayer/>
                </SwiperSlide>
                <SliderNext ref={navigationNextRef} />
            </Swiper>
        </SliderWrapper>
    )
}

export default UserSlider