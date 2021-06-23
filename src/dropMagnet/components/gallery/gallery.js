import React, {useCallback, useState} from "react";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import styled from "styled-components";

const Title = styled.p`
  padding-bottom: 32px;
  font-size: 36px;
  margin: 0;
  color: #eaeaea;
`;
const Decription = styled.p`
    font-size: 24px;
    padding: 32px 0;
    margin: 0;
    color: #eaeaea;
`;
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
    max-width: 500px;
    max-height: 500px;
    min-width: 250px;
    min-height: 250px;
    width: 40vw;
    height: 40vw;
    img{
    width:100%;
    height:100%;
    object-fit: cover;
    }
`;
const GalleryButton = styled.button`
  width: 236px;
  height: 46px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101010;
  border-radius: 100px;
  color: #eaeaea;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 0 8px;
  border:none;
  outline: none;
  cursor: pointer;
`;


const Gallery = (props) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [margin, setMargin] = useState(100)

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, []);


    window.addEventListener("resize", () => {
        if(document.body.clientWidth <= 500){
            setMargin(20)
        }
    })


    return (
        <GalleryWrapper style={{backgroundColor: `${props.backgroundColor}`}}>
            <GalleryContent>
                <Title>Art title</Title>
                <ControlledZoom
                    overlayBgColorEnd={"rgba(0,0,0,.7)"}
                    isZoomed={isZoomed}
                    onZoomChange={handleZoomChange}
                    zoomMargin={margin}>
                    <ImgWrapper>
                        <img src={props.imgUrl} alt="gallery"/>
                    </ImgWrapper>
                </ControlledZoom>
                <Decription>The Description goes here</Decription>
                <GalleryButton>Buy for {props.price}$</GalleryButton>
            </GalleryContent>
        </GalleryWrapper>
    );
};

export default Gallery