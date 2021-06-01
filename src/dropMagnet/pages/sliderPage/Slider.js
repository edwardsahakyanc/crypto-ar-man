import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCoverflow,Autoplay} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "../../slider.scss";
import styled from "styled-components";



SwiperCore.use([EffectCoverflow,Autoplay]);
const imgUrls = [
    {id:1, url: "https://swiperjs.com/demos/images/nature-1.jpg"},
    {id:2, url: "https://swiperjs.com/demos/images/nature-2.jpg"},
    {id:3, url: "https://swiperjs.com/demos/images/nature-3.jpg"},
    {id:4, url: "https://swiperjs.com/demos/images/nature-4.jpg"},
    {id:5, url: "https://swiperjs.com/demos/images/nature-5.jpg"},
    {id:6, url: "https://swiperjs.com/demos/images/nature-6.jpg"},
    {id:7, url: "https://swiperjs.com/demos/images/nature-7.jpg"},
    {id:8, url: "https://swiperjs.com/demos/images/nature-8.jpg"},
    {id:9, url: "https://swiperjs.com/demos/images/nature-9.jpg"}
];

const SwiperSlider = styled(Swiper)`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    .slide-item{
        padding: 0 10px;
        filter: blur(10px);
        .swiper-slide-shadow-left{
            background: none;
        }
        .swiper-slide-shadow-right{
            background: none;
        }
        &.swiper-slide-active{
        filter: blur(0);
        }
        &.swiper-slide-prev{
        filter: blur(0);
        }
        &.swiper-slide-next{
        filter: blur(0);
        }
    }
`;
const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const Overlay = styled.div`
    position: absolute;
    max-width: 510px;
    width: 100%;
    height: 100%;
    z-index: 10;
    // background-image: linear-gradient(270deg, rgba(21, 20, 20, 0.7) 0%, rgb(21, 20, 20) 100%);
    background-color: rgba(21, 20, 20, 0.8);
    // box-shadow: rgba(21, 20, 20, 80%) 0px 0px 5px 10px;
    box-shadow: 0 0 5px 10px rgba(21, 20, 20, 0.7);
    // backdrop-filter: blur(20px); 
    // filter: blur(40px);
    filter: blur(10px) drop-shadow(-4px 4px 10px #151414);
    &.overlay_left{
    top:0;
    left: 0;
    }
    &.overlay_right{
    top:0;
    right: 0;
    }
`;



const Slider = () => {
    const [size, setSize] = useState(window.innerWidth/4);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if(window.innerWidth > 1200){
                setSize(window.innerWidth - 1200)
            }else{
                setSize(0)
            }
        })
    },[]);

    return (
        <SliderWrapper>
            <Overlay className="overlay_left" style={{width: `${size + 100}px`}}/>
            <SwiperSlider
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                // watchSlidesProgress={true}
                // watchSlidesVisibility={true}
                // autoplay={{
                //     "delay": 2500,
                //     "disableOnInteraction": false
                // }}
                coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    // "slideShadows": true
                }}>
                {
                    imgUrls.map(img => {
                        return (
                            <SwiperSlide key={img.id} className="slide-item">
                                <img src={img.url} alt="slide"/>
                            </SwiperSlide>
                        )
                    })
                }
            </SwiperSlider>
            <Overlay className="overlay_right" style={{width: `${size}px`}}/>
        </SliderWrapper>
    )
}

export default Slider