import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  height: calc(100vh - 99px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.h1`
  font-size: 85px;
  font-weight: 900;
  margin: 0 0 40px 0;
`;

const SubText = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  .bold {
    font-weight: 900;
  }
`;

const DMTs = () => {
    return(
        <Wrapper>
            {/*<MainText>Digital Movie Tokens™</MainText>*/}
            {/*<SubText>A <span className='bold'>supercharged</span> digital emulation of a physical disc</SubText>*/}
            <MainText>MovieKey™</MainText>
            <SubText>The Ultimate MovieFarm experience.</SubText>
        </Wrapper>
    )
}

export default DMTs;