import React, {useMemo, useState} from "react";
import img0 from '../assets/frame-000000.jpg';
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  height: calc(100vh - 99px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;

const Text = styled.div`
  font-size: 18px;
  color: transparent;
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

const EightK = () => {
    const [fontSize, setFontSize] = useState(17);
    const [currentImage] = useState(0)

    const styleObj = useMemo(() => {
        if (fontSize >= 500) {
            return {
                fontSize: 500,
                transition: '1s ease',
                backgroundPosition: `${currentImage}% ${currentImage}%`
            }
        }

        else {
            return {
                fontSize: fontSize
            }
        }
    }, [currentImage, fontSize])

    const setFontSizeHandler = (e) => {
        if (e.deltaY === 100 && fontSize < 500) {
            setFontSize(prevState => prevState + 7)
        }

        if (e.deltaY === -100 && fontSize > 17) {
            setFontSize(prevState => prevState - 7)
        }
    }
    return(
        <Wrapper onWheel={setFontSizeHandler}>
          <Text style={styleObj}>
              8K
          </Text>
          <SubTitle>with MovieKey</SubTitle>
        </Wrapper>
    )
}

export default EightK;