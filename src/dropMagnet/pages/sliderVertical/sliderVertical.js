import React, {useState, useRef, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "./sliderVertical.scss"
import "swiper/swiper.min.css";
import SwiperCore, {Mousewheel, Scrollbar} from 'swiper/core';
import NewUserContent from "../../components/newUserContent/newUserContent";

SwiperCore.use([Mousewheel, Scrollbar]);


const Vertical = () => {
    const refer = useRef(null);
    // const [mouseWheel, setMouseWeel] = useState(false);
    //
    //
    // useEffect(() => {
    //     if (refer.current.scrollHeight >= refer.current.offsetHeight) {
    //         setMouseWeel(false)
    //     } else {
    //         setMouseWeel(true)
    //     }
    // }, [])
    //
    // console.log(mouseWheel)


    return (

        <div>
            <Swiper
                direction={'vertical'}
                mousewheel={{
                    // forceToAxis:true,
                    releaseOnEdges: true,
                    eventsTarget: '.slide-content',
                }}
                className="verticaled">
                <SwiperSlide>
                    <div className="">
                        <NewUserContent/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <NewUserContent/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Vertical