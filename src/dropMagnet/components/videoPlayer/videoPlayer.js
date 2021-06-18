import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";


const PlayerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const VideoPlayer = () => {
    return (
        <PlayerWrapper>
            <ReactPlayer
               url='https://www.youtube.com/watch?v=MzI_CIYSsfQ'
               controls={true}
            />
        </PlayerWrapper>
    )
}

export default VideoPlayer