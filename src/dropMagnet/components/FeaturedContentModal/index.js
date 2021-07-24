import Modal from 'react-modal';
import React, {useState} from "react";
import styled from "styled-components";
import CircleIcon from "../newUserContent/styled-components/icon-wrapper";

import discord from "../../assets/Discord.svg";
import telegram from "../../assets/Telegram.svg";
import openSea from "../../assets/Open Sea.svg";
import rarible from "../../assets/Rarible.svg";
import instagram from "../../assets/Instagram.svg";
import checkIcon from "../../assets/basic-tick.svg";
import AddButtonsModal from "../addButtonsContentModal";
import AddMediaModal from "../addMediaContentModal";
import AddLinkModal from "../addLinkModal";
import ContectGreySection from "../contectGreySection/ContectGreySection";

Modal.setAppElement('#portal');

const ComponentContainer = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61));
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 1200;
    text-align: center;
    color: #ffffff;
    font-weight: 400;

    header {
      display: flex;
      align-items: center;
      justify-content: center; 
      position: relative;
      margin: 16px 0;
        
      .header-title {
        font-weight: 500;
        margin: 16px 0;
      }
      
      img {
        position: absolute;
        padding: 0;
        right: 16px;
        top: 0;
      }  
                
    }
    
    .add-btn {
      background: none; 
      outline: none;
      border: none;
      
      div {
        padding: 8px 16px;
        background-image: linear-gradient(rgba(0, 0, 0, 0.61) 0%, rgba(0, 0, 0, 0.61) 100%);
        color: #EAEAEA;
        font-size: 18px;
        border-radius: 26px;
        border: 0.75px solid #000;

      }  
    }
    
    .additional-btn {
       min-width: 110px
    }
        
    .close-btn {
      font-size: 18px;
      padding: 8px 16px;
      background: none;
      outline: none;
      border: 0.75px solid #000000;
      border-radius: 26px;
      color: #ffffff;
      background-image: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: 16px;
    }
`;

// const UserContentListDescription = styled.div`
//     font-size: 18px;
//     max-width: 342px;
//     color: #fff;
//     text-align: center;
//     margin-bottom: 16px;
//     background-image: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
//     border: 0.75px solid #000000;
//     padding: 10px 0;
//     border-radius: 9px;
//     font-family: Azo Sans;
//     font-weight: 400;
//
//     .nft {
//       font-style: italic;
//       font-weight: 600;
//     }
//
// `;

const SocialMediaLinks = styled.div`
    max-width: 342px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
`;

const Content = styled.div`
       
    .content {
      border: 3px solid #1A1A1A;
      padding: 16px 29px;
      margin: 0 7px;
      margin-bottom: 16px;
      border-radius: 16px;
      background-color: #3C3C3C;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      position: relative;
      font-weight: 400;
      color: #EAEAEA;  
    }
    
    .content-additional {
      padding: 16px 19px;
    }
    
    .title {
      font-style: italic;
      margin-bottom: 16px;
    }
    
    .description {
      font-size: 18px;
      margin-bottom: 32px;  
    }
    
    .slots-text {
      color: #676767;
      margin-top: 38px;  
    }
    
    .menu {
      position: absolute;
      max-width: 16px;
      top: 4px;
      left: 16px;
      cursor: pointer;
      
      .line {
        min-width: 16px;
        border: 1px solid #737373;
        margin: 7px 0;
      }  
    }
`;

const FeaturedContent = ({isOpen, closeModal}) => {

    const [additionalSlider, setAdditionalSlider] = useState(false);

    const [addLinkModalToggle, setAddLinkModalToggle] = useState(false);

    const [addMediaModalToggle, setAddMediaModalToggle] = useState(false);

    const [addButtonModalToggle, setAddButtonModalToggle] = useState(false);

    const handleCloseModal = () => {
        setAddButtonModalToggle(false);
        setAddMediaModalToggle(false);
        setAddLinkModalToggle(false);
    }

    return (
            <Modal
                closeTimeoutMS={200}
                isOpen={isOpen}
                onRequestClose={closeModal}
                className='sharing'
            >
                  <ComponentContainer>
                      <header className='header-title'>
                          <div>Featured Content</div>
                          <img src={checkIcon} alt="check" onClick={() => {
                              closeModal();
                              setAdditionalSlider(false);
                          }}/>
                      </header>
                      <Content>
                          <div className='content'>
                              <div className='menu'>
                                  <div className='line'> </div>
                                  <div className='line'> </div>
                                  <div className='line'> </div>
                              </div>
                              <div className='title'>Slide One</div>
                              <ContectGreySection content='My latest movie “Beautiful Blue Eyes”'/>

                              <ContectGreySection content={<>My special merch for <span className='nft'>NFT</span> holders!</>}/>

                              <SocialMediaLinks>
                                  <CircleIcon imgUrl={discord} alt={"icon"} className='social-media' />
                                  <CircleIcon imgUrl={telegram} alt={"icon"} className='social-media' />
                                  <CircleIcon imgUrl={openSea} alt={"icon"} className='social-media' />
                                  <CircleIcon imgUrl={rarible} alt={"icon"} className='social-media' />
                                  <CircleIcon imgUrl={instagram} alt={"icon"} className='social-media' />
                              </SocialMediaLinks>
                          </div>
                      </Content>

                      {
                          additionalSlider
                             ? <Content>
                                  <div className='content content-additional'>
                                      <div className='title'>Slide Two</div>

                                      <div className='description'>
                                          What shall we add?
                                      </div>

                                      <button className='add-btn additional-btn' onClick={() => setAddLinkModalToggle(true)}>
                                          <div>Links</div>
                                      </button>
                                      <button className='add-btn additional-btn' onClick={() => setAddMediaModalToggle(true)}>
                                          <div>Media</div>
                                      </button>
                                      <button className='add-btn additional-btn' onClick={() => setAddButtonModalToggle(true)}>
                                          <div>Buttons</div>
                                      </button>

                                      <div className='slots-text'>Slide is empty</div>
                                  </div>
                               </Content>
                              : <Content>
                                  <div className='content'>
                                      <div className='menu'>
                                          <div className='line'> </div>
                                          <div className='line'> </div>
                                          <div className='line'> </div>
                                      </div>
                                      <div className='title'>Slide Two</div>

                                      <ContectGreySection content='My latest movie “Beautiful Blue Eyes”'/>

                                      <button className='add-btn' onClick={() => setAdditionalSlider(true)}>
                                          <div>Add something else</div>
                                      </button>

                                      <div className='slots-text'>1/3 slots used</div>
                                  </div>
                                </Content>
                      }
                      <button className='close-btn' onClick={() => {
                          closeModal();
                          setAdditionalSlider(false)
                      }}>Add slide</button>
                  </ComponentContainer>
                  <AddLinkModal isOpen={addLinkModalToggle} closeModal={handleCloseModal}/>
                  <AddMediaModal isOpen={addMediaModalToggle} closeModal={handleCloseModal}/>
                  <AddButtonsModal isOpen={addButtonModalToggle} closeModal={handleCloseModal}/>
            </Modal>
    )
}

export default FeaturedContent;