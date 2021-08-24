import React from "react";
import styled from "styled-components";
import {Controller, Scene} from "react-scrollmagic";
import {Tween, Timeline} from "react-gsap";
import "./styles.scss"
import img0 from "../../assets/frame-000000.jpg";


const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const Text = styled.div`
  font-size: 18px;
  color: red;
  transition: 1s linear forwards;
  background: url(${img0});
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  max-height: 500px;
`;

const SubTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #000;
`;

const Title = styled.h1`
  font-size: 85px;
  font-weight: 900;
  color: #000;
  font-family: "Azo Sans", sans-serif;
  opacity: 0;
  animation: fade 10s ease forwards;
  margin:0 0 40px 0;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SlideOneText = styled.p`
  color: #000;
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  opacity: 0;
  .bold {
    font-weight: 900;
  }
`;
const SlideTreeTitle = styled.p`
  font-size: 120px;
  font-weight: 400;
  color: #000;
  font-family: "Azo Sans", sans-serif;
  margin:0;
`;
const SlideTreeText = styled.p`
  font-size: 36px;
  font-weight: 400;
  color: #000;
  font-family: "Azo Sans", sans-serif;
  margin:0;
  .underlined{
    text-decoration: underline;
  }
`


const MagicScroll = () => {
    return (
        <div>
            <Controller>
                    <Scene duration={600} pin={true} triggerHook="onLeave" reverse={false}>
                    {
                        (progress) => (
                            <Wrapper>
                                <Timeline totalProgress={progress}  paused>
                                    <Title>Digital Movie Tokens™</Title>
                                    <Tween
                                        from={{opacity: 0}}
                                        to={{opacity: 1}}
                                    >
                                        <SlideOneText>
                                            A &nbsp;
                                            <span className='bold'>supercharged</span>&nbsp;
                                            digital emulation of a physical disc
                                        </SlideOneText>
                                    </Tween>
                                </Timeline>
                            </Wrapper>
                        )
                    }
                </Scene>
            </Controller>
            <Controller>
                <Scene duration={2000} pin={true} triggerHook="onLeave" reverse={false}>
                    {
                        (progress) => (
                            <Wrapper>
                                <Timeline totalProgress={progress} paused>
                                    <Tween
                                        from={{fontSize: 17}}
                                        to={{fontSize: 500}}
                                    >
                                        <Text>
                                            8K
                                        </Text>
                                    </Tween>
                                    <SubTitle>with MovieKey</SubTitle>
                                </Timeline>
                            </Wrapper>
                        )
                    }
                </Scene>
            </Controller>
            <Controller>
                <Scene duration={1000} pin={true} triggerHook="onLeave">
                    {
                        (progress) => (
                            <Wrapper>
                                <Timeline totalProgress={progress} paused>
                                    <SlideTreeTitle>Permanent</SlideTreeTitle>
                                    <Tween
                                        from={{opacity: 0}}
                                        to={{opacity: 1}}
                                    >
                                        <SlideTreeText>
                                            with storage on the <span className="underlined">permaweb</span>
                                        </SlideTreeText>
                                    </Tween>
                                </Timeline>
                            </Wrapper>
                        )
                    }
                </Scene>
            </Controller>
        </div>
    )
}


export default MagicScroll