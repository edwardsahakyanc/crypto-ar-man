import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Mousewheel} from 'swiper/core';
import "swiper/swiper.min.css";
import NewUserContent from "../../components/newUserContent/newUserContent";
import "./verticalySlidedPage.scss"
import Gallery from "../../components/gallery/gallery";
import galleryImage from "../../assets/gallery.png"
import HoveredCard from "../../components/3dCard/3dCard";
import VideoPlayer from "../../components/videoPlayer/videoPlayer";
import Portrait from "../../components/portrait/portrait";
import Landscape from "../../components/landscape/landscape";
import Three from "../../components/threeJs/threeJs";
// import Three from "../../components/threeJs/threeJs";

SwiperCore.use([Mousewheel]);

const VericalySlidedPage = () => {
    const firstSlide = {id: 1, imgUrl: galleryImage, backgroundColor: "#292929", price: "100"}

    return (
        <Swiper
            speed={700}
            direction={'vertical'}
            mousewheel={{
                releaseOnEdges: true,
                eventsTarget: '.slide-content',
            }}
            navigation={{
                nextEl: ".nextEl"
            }}
            slideToClickedSlide={true}
            preventClicks={true}
            preventClicksPropagation={false}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log("ONSWPIPER", swiper)}
            className="verticalSwipper">
            <SwiperSlide>
                <NewUserContent/>
            </SwiperSlide>
            <SwiperSlide className="slide-content">
                <h1>SECOND SLIDE</h1>
            </SwiperSlide>
            <SwiperSlide className="slide-content">
                <h1>Third SLIDE</h1>
            </SwiperSlide>
            <SwiperSlide className="slide-content">
                <h1>Fourth SLIDE</h1>
            </SwiperSlide>
            {/*<SwiperSlide className="slide-content">*/}
            {/*    <Gallery {...firstSlide}/>*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide className="slide-content">*/}
            {/*    <HoveredCard/>*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide className="slide-content">*/}
            {/*    <Three/>*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide className="slide-content">*/}
            {/*    <VideoPlayer/>*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide className="slide-content">*/}
            {/*    <Portrait/>*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide className="slide-content">*/}
            {/*    <Landscape/>*/}
            {/*</SwiperSlide>*/}
        </Swiper>
    )
}


export default VericalySlidedPage