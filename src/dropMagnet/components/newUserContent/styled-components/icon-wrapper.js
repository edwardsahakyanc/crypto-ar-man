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
  
  &.social-media {
        width: 62px;
        height: 42px;
        border-radius: 9px;
        margin: 0 2px;
        
        img {
         width: 28px;
         height: 26px;
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
    @media (max-width: 414px) {  
      &.header-edit {
        width: 36px;
        height: 36px;
        
        img {
         width: 17px;
         height: 17px;   
        }
      } 
`

const CircleIcon = ({imgUrl, alt, className}) => {
    return (
        <IconWrap className={className}>
            <img src={imgUrl} alt={alt} className={className}/>
        </IconWrap>
    )
}

export default CircleIcon
