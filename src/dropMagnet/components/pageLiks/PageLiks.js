import React from "react";
import userLogo from "../../assets/profile.svg";
import whiteUserLogo from "../../assets/profileWhiteSvg.svg";
import styled from "styled-components";

const PageLiks = styled.div`
  max-width: 122px;
  height: 36px;
  border-radius: 55px;
  background-color: #101010;
  border: 1px solid #101010;
  margin: 0 auto;
  padding: 21px 16px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 14px;
  z-index: 9999;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  
  &.light {
    background-color: #F7F7F7;
    border: 1px solid #D6D6D6;
    box-shadow: 0 2px 4px #C3C3C3;
  }
  
  img {
    position: relative;
    bottom: -3px
    
  }
  
  &.user-component-styles {
     // position: fixed;
     // bottom: 10px;
  }
  
  &.modal-page-styles {
    margin-top: 20px;
    color: linear-gradient(to right, #d600ff 0%, #6600ff 100%);
  }
  
`;

const Tab = styled.p`
    font-size: 21px;
    font-weight: 900;
    font-style: italic;
    color: #ffffff;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    margin: 0;
    cursor: pointer;
    
    &.nft {
      font-style: italic;
    }
    
    &.light {
      color: #5F5F5F;
    }
    
    &.active{
        background: linear-gradient(to right, #d600ff 0%, #6600ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    &.modal-page-styles { 
      background: -webkit-linear-gradient(45deg, #d600ff, #6600ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
`;

const PageLiksComponent = ({darkTheme, props, modalPageStyles, userComponentStyles}) => {

    const scrollToCover = () => {
        props.coverPageRef.current.scrollIntoView();
        // setActiveTab(1)
    };
    const scrollToGallery = () => {
        props.galleryRef.current.scrollIntoView();
        // setActiveTab(2)
    };

    return (
        <PageLiks className={`${darkTheme ? 'light' : '' } ${modalPageStyles} ${userComponentStyles}`}>
            <Tab className={"active"} onClick={scrollToCover}>
                <img src={modalPageStyles ? whiteUserLogo : userLogo} alt="user logo"/>
            </Tab>
            <Tab className={`${darkTheme ? 'light nft' : 'nft'} ${modalPageStyles}`} onClick={scrollToGallery}>NFTs</Tab>
        </PageLiks>
    );
}

export default PageLiksComponent;