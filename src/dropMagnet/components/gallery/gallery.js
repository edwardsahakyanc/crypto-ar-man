import React, {useCallback, useState} from "react";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styled from "styled-components";
import GalleryModal from "../galleryModal";
import dots from "../../assets/dots.svg";
import LikeButton from "../newUserContent/styled-components/likeButton";
import ShareModal from "../sharingIconsModal";
// import share from "../../assets/share.svg"



const GalleryWrapper = styled.div`
    width: 100%;
    height: 100%;
    position:relative;
    display:flex;
    // align-items: center;
    justify-content: center;
     @media(max-height: 550px){
      // align-items: stretch;
    }
`;
const GalleryContent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    // align-items: center;
    font-weight: 700;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    // justify-content: space-between;
`;
const ImgWrapper = styled.div`
    // max-width: 440px;
    // max-height: 440px;
    // min-width: 250px;
    // min-height: 250px;
    // width: 40vw;
    // height: 40vw;
    // border-radius: 15px;
    overflow: hidden;
    height: 414px;
    margin-top: 139px;
    
    img{
    width:100%;
    height:100%;
    object-fit: cover;
    }
`;
const GalleryButtonWrapper = styled.div`
    display:flex;
    // align-items:center;
    justify-content: center;
    margin-top: 16px;
    .button{
        width: 99px;
        height: 40px;
        border-radius: 9px;
        border: 0.75px solid #000000;
        outline: none;
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content: center;
        background-image: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
        
        img{
        width: 27px;
        }
    }
`

const Gallery = (props) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [margin, setMargin] = useState(70);
    const [isOpen, setIsOpen] = useState(false);
    const [shareIsOpen, setShareIsOpen] = useState(false);

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, []);


    window.addEventListener("resize", () => {
        if(document.body.clientWidth <= 500){
            setMargin(20)
        }
    })

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }
    const closeShareModal = () => {
        setShareIsOpen(false)
    }

    const openShareModal = () => {
        setShareIsOpen(true)
    }


    return (
        <>
            <GalleryWrapper >
                <GalleryContent>
                    <ControlledZoom
                        overlayBgColorEnd={"rgba(0,0,0,.7)"}
                        isZoomed={isZoomed}
                        onZoomChange={handleZoomChange}
                        zoomMargin={margin}>
                        <ImgWrapper>
                            <img src={props.imgUrl} alt="gallery"/>
                        </ImgWrapper>
                    </ControlledZoom>
                    <GalleryButtonWrapper>

                        {/*<button>*/}
                        {/*    <img src={share} alt="share"/>*/}
                        {/*</button>*/}

                        <div onClick={openShareModal}>
                            <LikeButton galleryStyle='gallery-style'/>
                        </div>

                        <div onClick={openModal} className='button'>
                            <img src={dots} alt="dots"/>
                        </div>
                    </GalleryButtonWrapper>
                </GalleryContent>
            </GalleryWrapper>
            <GalleryModal isOpen={isOpen} closeModal={closeModal}/>
            <ShareModal isOpen={shareIsOpen} closeModal={closeShareModal}/>
        </>
    );
};

export default Gallery