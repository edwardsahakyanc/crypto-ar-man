import React, {useState} from "react";
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
    const firstSlide = {id: 1, imgUrl: galleryImage, backgroundColor: "#292929", price: "100"};
    const [touchMove, setTouchMove] = useState(false);

    const handleSwiper = (swiper) => {
        console.log(Swiper)
    }
    console.log(touchMove)

    return (
        <div>
            <NewUserContent setTouchMove={setTouchMove}/>
            <Swiper
                speed={700}
                direction={'vertical'}
                mousewheel={{
                    releaseOnEdges: true,
                }}
                navigation={{
                    nextEl: ".nextEl"
                }}
                autoHeight={true}
                slideToClickedSlide={true}
                preventClicks={true}
                preventClicksPropagation={false}
                className="verticalSwipper">
                <SwiperSlide>
                    <Gallery {...firstSlide}/>
                </SwiperSlide>
                <SwiperSlide>
                    <HoveredCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Three/>
                </SwiperSlide>
                <SwiperSlide>
                    <VideoPlayer/>
                </SwiperSlide>
                <SwiperSlide>
                    <Portrait/>
                </SwiperSlide>
                <SwiperSlide>
                    <Landscape/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


export default VericalySlidedPage