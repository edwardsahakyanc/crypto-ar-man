import React from "react";
import styled from "styled-components";
import landscapeImg from "../../assets/landscape.png"

const LandscapeWrapper = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   width:100%;
   height:100%;
`;

const LandscapeImgWrapper = styled.div`
    max-width:600px;
    max-height:350px;
    border-radius: 10px;
    width: 90%;
    height:90%;
    margin: auto;
    overflow:hidden;
`;

const LandscapeImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`;

const Landscape = () => {
    return (
        <LandscapeWrapper>
            <LandscapeImgWrapper>
                <LandscapeImg src={landscapeImg} />
            </LandscapeImgWrapper>
        </LandscapeWrapper>
    )
}

export default Landscape