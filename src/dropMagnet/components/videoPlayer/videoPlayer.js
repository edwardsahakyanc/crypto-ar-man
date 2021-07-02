import React, {useState} from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import dots from "../../assets/dots.svg";
import share from "../../assets/share.svg";
import GalleryModal from "../galleryModal";


const PlayerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const ReactPlayerWrapper = styled.div`
    max-width: 640px;
    max-height: 360px;
    width: 100%;
    height: calc(100vw/1.8);
`;
const GalleryButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin-top:25px;
    margin-bottom: 40px;
    button{
        width: 51px;
        height: 51px;
        border-radius: 100px;
        background-color: #ffffff;
        border:none;
        outline: none;
        margin: 0 8px;
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content: center;
        img{
        width: 27px;
        }
    }
`;

const VideoPlayer = () => {
    const [overlay, setOverlay] = useState(false);

    const closeOverlay = () => {
        setOverlay(false)
    }

    const openOverlay = () => {
        setOverlay(true)
    }
    return (
        <>
            <PlayerWrapper>
                <ReactPlayerWrapper>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=MzI_CIYSsfQ'
                        controls={true}
                        width='100%'
                        height='100%'
                    />
                </ReactPlayerWrapper>
                <GalleryButtonWrapper>
                    <button onClick={openOverlay}>
                        <img src={dots} alt="dots"/>
                    </button>
                    <button>
                        <img src={share} alt="share"/>
                    </button>
                </GalleryButtonWrapper>
            </PlayerWrapper>
            <GalleryModal isOpen={overlay} closeModal={closeOverlay}/>
        </>
    )
}

export default VideoPlayer