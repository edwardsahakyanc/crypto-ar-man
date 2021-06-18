import React from "react";
import styled from "styled-components";
import portraitImg from "../../assets/portrait.png"

const PortraitWrapper = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   width:100%;
   height:100%;
`;

const PortraitImgWrapper = styled.div`
    max-width:400px;
    max-height:550px;
    border-radius: 10px;
    width: 90%;
    height:90%;
    margin: auto;
    overflow:hidden;
`;

const PortraitImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`

const Portrait = () => {
    return (
        <PortraitWrapper>
            <PortraitImgWrapper>
                <PortraitImg src={portraitImg} />
            </PortraitImgWrapper>
        </PortraitWrapper>
    )
}

export default Portrait