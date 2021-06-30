import React from "react";
import "./ScrollSnapPage.scss";
import NewUserContent from "../../components/newUserContent/newUserContent";
import Gallery from "../../components/gallery/gallery";
import galleryImage from "../../assets/gallery.png";
import HoveredCard from "../../components/3dCard/3dCard";
import Three from "../../components/threeJs/threeJs";
import VideoPlayer from "../../components/videoPlayer/videoPlayer";
import Portrait from "../../components/portrait/portrait";
import Landscape from "../../components/landscape/landscape";


const ScrollSnapPage = () => {
    const firstSlide = {id: 1, imgUrl: galleryImage, backgroundColor: "#292929", price: "100"};
    return (
        <article className="scroller">
            <section>
                <NewUserContent/>
            </section>
            <section>
                <Gallery {...firstSlide}/>
            </section>
            <section>
                <HoveredCard/>
            </section>
            <section>
                <Three/>
            </section>
            <section>
                <VideoPlayer/>
            </section>
            <section>
                <Portrait/>
            </section>
            <section>
                <Landscape/>
            </section>
        </article>
    )
}

export default ScrollSnapPage