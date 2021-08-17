import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 99px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 158px;
  height: 52px;
  background-color: #000;
  color: #fff;
  font-weight: 900;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
const PlayTrailer = () => {
   return(
       <Wrapper>
           <Text>The future of movies… is mind blowing.</Text>
           <PlayButton>Play Trailer</PlayButton>
       </Wrapper>
   )
}

export default PlayTrailer;