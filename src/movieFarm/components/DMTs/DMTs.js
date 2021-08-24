import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  height: calc(100vh - 99px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 85px;
  font-weight: 900;
  color: #000;
  font-family: "Azo Sans", sans-serif;
  opacity: 0;
  animation: fade 10s ease forwards;
  margin: 0 0 40px 0;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SubTitle = styled.h2`
  color: #000;
  font-size: 36px;
  font-family: "Azo Sans", sans-serif;
  font-weight: 500;
  margin: 0;
  opacity: 0;
  .bold {
    font-weight: 900;
  }
  
  &.anime{
    animation: fade 10s ease forwards;
  }
  
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DMTs = () => {
    const [fadeinText, setFadeinText] = useState(false);

    const fadeInText = () => {
        setFadeinText(true)
    }

    return(
        <Wrapper onWheel={fadeInText}>
            <Title>Digital Movie Tokens™</Title>
            <SubTitle
                className={fadeinText && "anime"}
                // style={{  animation: fadeinText && "fade 10s ease forwards" }}
            >
                A
                &nbsp;
                <span className='bold'>supercharged</span>
                &nbsp;
                digital emulation of a physical disc
            </SubTitle>
        </Wrapper>

    )
}

export default DMTs;