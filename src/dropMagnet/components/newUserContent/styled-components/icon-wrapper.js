import React from "react";
import styled from "styled-components";

const IconWrap = styled.div`
  width: 46px;
  height: 46px;
  background-color: #101010;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img{
      width: 22px;
      height:22px;
      object-fit: contain;
      &.heart-image{
        width: 100%;
        height: 100%;
      }
  }
   @media (max-width: 350px) and (max-height: 650px) {
        width: 36px;
        height: 36px;
        img{
            width: 18px;
            height: 18px;
        }
    }
`

const CircleIcon = ({imgUrl, alt, className}) => {
    return (
        <IconWrap>
            <img src={imgUrl} alt={alt} className={className}/>
        </IconWrap>
    )
}

export default CircleIcon
