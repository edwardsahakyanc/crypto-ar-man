import Modal from 'react-modal';
import React from "react";
import styled from "styled-components";
import close from "../../assets/close.svg";
// import close from "../../assets/close.svg";
// import menu from "../../assets/menu.svg";
// import message from  "../../assets/message.svg";
// import share from  "../../assets/share2.svg";
// import blockChain from  "../../assets/blockchain.svg";
// import image from  "../../assets/image source.svg";
// import CircleIcon from "../newUserContent/styled-components/icon-wrapper";
// import LikeButton from "../newUserContent/styled-components/likeButton";

Modal.setAppElement('#portal');

const ComponentContainer = styled.div`
    height: 100vh;
    align-items: center;
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 1200;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 59px 0 56px;
`;

const Items = styled.div`
    min-width: 89px;
    min-height: 74px;
    border-radius: 7px;
    border: 1px solid #C0C0C0;
    margin-bottom: 16px;
    background-color: #000;
    
`;

const TimeOutText = styled.div`
   text-align: center;
   color: #fff;
   font-size: 18px;
   font-weight: 300;
   margin-top: 129px; 
`;

const Title = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    width: 100%;
    padding-top: 124px;
    margin-bottom: 62px;
`;

const Description = styled.div`
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    margin-bottom: 26px;
`;

const TextContainer = styled.div`
    margin: 0 auto;
`;

const Close = styled.button`
    position:absolute;
    width: 42px;
    height: 42px;
    background-color: #ffffff;
    border-radius: 100px;
    cursor:pointer;
    border:none;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 520px){
      top: 24px;
      left: 16px;
    }
    img{
        width:18px;
        height:18px
    }
`;


const ShareModal = ({isOpen, closeModal}) => {

    return (
            <Modal
                closeTimeoutMS={200}
                isOpen={isOpen}
                onRequestClose={closeModal}
                className='sharing'
            >
                  <ComponentContainer>
                      <Close onClick={closeModal}><img src={close} alt="close"/></Close>
                      <TextContainer>
                          <Title>
                              Link copied!
                          </Title>
                          <Description>
                              Fast share:
                          </Description>
                      </TextContainer>
                      <Content>
                          <Items/>
                          <Items/>
                          <Items/>
                          <Items/>
                          <Items/>
                          <Items/>
                          <Items/>
                          <Items/>
                          <Items/>
                      </Content>
                      <TimeOutText>
                          This screen will close in: 10s
                      </TimeOutText>
                  </ComponentContainer>
            </Modal>
    )
}

export default ShareModal;