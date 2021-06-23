import React, {useCallback, useRef, useState} from "react";
import styled from "styled-components";
import cardImg from "../../assets/portrait.png"

const SlideWrapper = styled.div`
   position: relative;
   width:100%;
   height:100vh;
   perspective: 1500px;
`;
const CardWrapper = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   width:100%;
   height:100%;
`;
const Card = styled.div`
  border-radius: 10px;
  overflow:hidden;
  box-shadow: 0 1px 5px #00000099;
  width:  300px;
  height: 400px;
  background-image: url(${cardImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0,0,0,0deg);
  &:hover{
  transition-duration: 150ms;
  box-shadow: 0 5px 20px 5px #00000044;
  }
  &:active{
  transition-duration: 150ms;
  box-shadow: 0 5px 20px 5px #00000044;
  }
  .glow{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
  }
`;

const HoveredCard = () => {
    const cardRef = useRef();
    const [center, setCenter] = useState({x: 0, y: 0, distance: 0});
    const [scale, setScale] = useState({x: 1, y: 1, z: 1});
    const [bound, setBound] = useState({width: 0, height: 0});
    const [grow, setGrow] = useState(false);

    const rotateToMouse = useCallback((e) => {
        const bounds = cardRef.current.getBoundingClientRect();
        const leftX = e.clientX - bounds.x;
        const topY = e.clientY - bounds.y;
        const x = leftX - bounds.width / 2;
        const y = topY - bounds.height / 2;
        setGrow(true);
        setBound(prevState => ({...prevState, width: bounds.width / 2, height: bounds.height / 2}));
        setCenter(prevState => ({...prevState, x, y, distance: Math.sqrt(x ** 2 + y ** 2)}));
        setScale(prevState => ({...prevState, x: 1.07, y: 1.07, z: 1.07}));
    }, []);

    const mouseLeave = useCallback(() => {
        document.removeEventListener('mousemove', rotateToMouse);
        setGrow(false);
        setBound(prevState => ({...prevState, width: 0, height: 0}));
        setCenter({x: 0, y: 0, distance: 1});
        setScale(prevState => ({...prevState, x: 1, y: 1, z: 1}));
    }, [rotateToMouse]);

    return (
        <SlideWrapper>
            <CardWrapper>
                <Card
                    ref={cardRef}
                    className={".card"}
                    style={{transform: `scale3d(${scale.x}, ${scale.y}, ${scale.z}) rotate3d(${center.y / 100},${-center.x / 100},0,${Math.log(center.distance) * 2}deg)`}}
                    onMouseMove={rotateToMouse}
                    onMouseLeave={mouseLeave}>
                    <div className="glow" style={{
                        backgroundImage: `${grow ? `radial-gradient(circle at ${center.x * 2 + bound.width}px ${center.y * 2 + bound.height}px, #ffffff55, #0000000f)` : ""}`,
                        backdropFilter: `hue-rotate(180deg)`
                    }}/>
                </Card>
            </CardWrapper>
        </SlideWrapper>
    )
}

export default HoveredCard