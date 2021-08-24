import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";

import SwiperCore, {Mousewheel} from 'swiper/core';


SwiperCore.use([Mousewheel]);


const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  // padding-top: 83px;
  position:relative;
`;

const FixedText = styled.p`
    font-size: 80px;
    font-weight: 400;
    font-family: "Azo Sans", sans-serif;
    color: #000000;
    margin: 0 190px 0 0;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // top: 50%;
    // left: 40%;
    // transform: translate(-50%, -50%);
`;

const Text1 = styled.p`
    font-size: 80px;
    font-weight: 400;
    font-family: "Azo Sans", sans-serif;
    color: #000000;
    margin: 0 0 0 180px;
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Text2 = styled.p`
    font-size: 80px;
    font-weight: 400;
    font-family: "Azo Sans", sans-serif;
    color: #000000;
    margin: 0 0 0 160px;
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;
const Text3 = styled.p`
    font-size: 80px;
    font-weight: 400;
    font-family: "Azo Sans", sans-serif;
    color: #000000;
    margin: 0 0 0 155px;
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;




const DMTsYOURS = () => {
    return (
        <Wrapper>
            <FixedText>Yours to &nbsp;</FixedText>
            <Swiper direction={'vertical'}
                    mousewheel={true}
                    className="wordsSwiper">
                <SwiperSlide><Text1>collect</Text1></SwiperSlide>
                <SwiperSlide><Text2>share</Text2></SwiperSlide>
                <SwiperSlide><Text3>trade</Text3></SwiperSlide>
            </Swiper>
        </Wrapper>
    )
}

export default DMTsYOURS