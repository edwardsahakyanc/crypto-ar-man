import React from "react";
import styled from "styled-components";


const Wrapper = styled.article`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  overflow-x: hidden;
  section{
    scroll-snap-align: start;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
      width: 100%;
      position: relative;
      z-index: 2;
      max-height: 100vh;
      overflow: hidden;
  }
`;

const Text = styled.p`
    font-size: 80px;
    font-weight: 400;
    font-family: "Azo Sans", sans-serif;
    color: #000000;
    margin: 0;
`;
const LastText = styled.p`
    font-size: 60px;
    font-weight: 500;
    font-family: "Azo Sans", sans-serif;
    color: #000000;
    margin: 0 0 27px 0;
`;
const Linka = styled.a`
    display: flex;
    font-size: 40px;
    font-weight: 400;
    font-family: "Azo Sans", sans-serif;
    color: #000000;
    margin: 0;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    cursor: pointer;
`;

const DMTs7 = () => {
    return (
        <Wrapper>
            <section>
                <Text>
                    Playable on any device
                </Text>
            </section>
            <section>
                <Text>
                    At lightspeed.
                </Text>
            </section>
            <section>
                <LastText>
                    Future-proof your movie today
                </LastText>
                <Linka>
                    Apply for early access
                </Linka>
            </section>
        </Wrapper>
    )
}

export default DMTs7