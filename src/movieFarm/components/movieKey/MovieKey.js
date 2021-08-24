import React, {useEffect, useMemo, useState} from "react";
// import '../../../../../App.scss';
import styled from "styled-components";
import img0 from '../../assets/frame-000000.jpg';


const Wrapper = styled.div`
  text-align: center;
  height: calc(100vh - 99px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const SubText = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: #000;
  font-family: "Azo Sans", sans-serif;
  background: url(${img0});
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  background-position: 12%  12%;
  transition: 1s ease;
  
  .bold {
    font-weight: 900;
  }
`;

const MainText = styled.h1`
        background: url(${img0});
        font-size: 85px;
        font-weight: 900;
        margin: 0 0 40px 0;
        color: #000;
        background-clip: text;
        -webkit-background-clip: text;
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        background-position: 7%  7%;
        transition: 1s ease;
        font-family: "Azo Sans", sans-serif;        
    `;

const MovieKey = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const [changed, setChanged] = useState(false);

    const nextSlide = () => setCurrentImage(prevState => prevState + 1.5);
    const prevSlide = () => setCurrentImage(prevState => prevState - 1.5);
    const styleObj = useMemo(() => {
        if (changed) {
            return {
                backgroundPosition: `${currentImage}% ${currentImage}%`
            }
        }
        return {
            background: '#000',
            color: '#000',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitTextFillColor: 'transparent',
            backgroundPosition: '0%  0%',
            transition: '1s ease',
        }
    }, [currentImage, changed])

    const animateBgImage = (e) => {
        if ((e.deltaY === 100 || e.key === "ArrowDown") && currentImage < 70) nextSlide();
        if (e.deltaY === -100 && currentImage > 0) prevSlide();
        setChanged(true);
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => animateBgImage(e));
        return window.removeEventListener('keydown', (e) => animateBgImage(e))
    })

    return (
        <Wrapper onWheel={(e) => animateBgImage(e)}>
            <MainText style={styleObj}>MovieKey™</MainText>
            <SubText style={styleObj}>The Ultimate MovieFarm experience.</SubText>
        </Wrapper>
    )
}

export default MovieKey;