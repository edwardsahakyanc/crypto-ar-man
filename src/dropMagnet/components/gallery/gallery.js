import React, {useCallback, useState} from "react";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styled from "styled-components";
import GalleryModal from "../galleryModal";
import dots from "../../assets/dots.svg";
import share from "../../assets/share.svg"



const GalleryWrapper = styled.div`
    width: 100%;
    height: 100%;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
     @media(max-height: 550px){
      align-items: stretch;
    }
`;
const GalleryContent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: center;
    font-weight: 700;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    justify-content: space-between;
   
`;
const ImgWrapper = styled.div`
    max-width: 440px;
    max-height: 440px;
    min-width: 250px;
    min-height: 250px;
    width: 40vw;
    height: 40vw;
    border-radius: 15px;
    overflow: hidden;
    img{
    width:100%;
    height:100%;
    object-fit: cover;
    }
`;
const GalleryButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin-top:25px;
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
`

const Gallery = (props) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [margin, setMargin] = useState(70);
    const [isOpen, setIsOpen] = useState(false);

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


    return (
        <>
            <GalleryWrapper style={{backgroundColor: `${props.backgroundColor}`}}>
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
                        <button onClick={openModal}>
                            <img src={dots} alt="dots"/>
                        </button>
                        <button>
                            <img src={share} alt="share"/>
                        </button>
                    </GalleryButtonWrapper>
                </GalleryContent>
            </GalleryWrapper>
            <GalleryModal isOpen={isOpen} closeModal={closeModal}/>
        </>
    );
};

export default Gallery