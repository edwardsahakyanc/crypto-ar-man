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

import {
    List,
    arrayMove,
    arrayRemove
} from "baseui/dnd-list";


Modal.setAppElement('#portal');

const ComponentContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    align-items: center;
    background-color: #292929;
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 1200;
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    
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
    
    ul {
     padding: 0 7px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     
     li {
       border: 3px solid #1A1A1A;
       margin-bottom: 16px;
       border-radius: 16px;
       background-color: #3C3C3C;
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
       position: relative;
       font-weight: 400;
       color: #EAEAEA;
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
       padding-bottom: 16px;
       max-width: 400px;
       
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
//
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
      margin-top: 41px;  
    }
    
    .add-content {
      margin: 38px auto 17px 0;
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

    const [additionalSlider, setAdditionalSlider] = useState(true);

    const [addLinkModalToggle, setAddLinkModalToggle] = useState(false);

    const [addMediaModalToggle, setAddMediaModalToggle] = useState(false);

    const [addButtonModalToggle, setAddButtonModalToggle] = useState(false);

    const [activeSlide, setActiveSlide] = useState(0);

    const handleCloseModal = () => {
        setAddButtonModalToggle(false);
        setAddMediaModalToggle(false);
        setAddLinkModalToggle(false);
    }

    const [items, setItems] = React.useState([

        {
            id: 1,
            title: 'Slide One',
            elementText: [
                'My latest movie “Beautiful Blue Eyes”',
                <>My special merch for <span className='nft'>NFT</span> holders!</>
            ],
            socialMediaIcons: [
                discord,
                telegram,
                openSea,
                rarible,
                instagram
            ]

        },
        {
            id: 2,
            title: 'Slide two',
            description: 'What shall we add?',
            addBtn: true,
            slotText: 'Slide is Empty'
        },
    ]);

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
                    }}/>
                </header>
                <Content>
                    <div className='content'>
                        <List
                            items={
                                items.map(i => {
                                    return (
                                        <React.Fragment key={i.id}>
                                            <div className='menu'>
                                                <div className='line'> </div>
                                                <div className='line'> </div>
                                                <div className='line'> </div>
                                            </div>
                                            <div className='title'>{i.title}</div>

                                            {
                                                activeSlide === i.id && i.description &&
                                                <div className='description'>{i.description}</div>
                                            }

                                            {activeSlide !== i.id && i.elementText && i.elementText.map(text =>
                                                <ContectGreySection content={text}/>)}
                                            <SocialMediaLinks>
                                                {
                                                    i.socialMediaIcons && i.socialMediaIcons.map(img => <CircleIcon
                                                        imgUrl={img} alt={"icon"} className='social-media'/>)
                                                }
                                            </SocialMediaLinks>

                                            {
                                                activeSlide === i.id && <>
                                                    <button className='add-btn additional-btn'
                                                            onClick={() => setAddLinkModalToggle(true)}>
                                                        <div>Links</div>
                                                    </button>
                                                    <button className='add-btn additional-btn'
                                                            onClick={() => setAddMediaModalToggle(true)}>
                                                        <div>Media</div>
                                                    </button>
                                                    <button className='add-btn additional-btn'
                                                            onClick={() => setAddButtonModalToggle(true)}>
                                                        <div>Buttons</div>
                                                    </button>

                                                </>
                                            }
                                            {
                                                i.addBtn && additionalSlider
                                                && <button
                                                    className='add-btn'
                                                    value={i.id}
                                                    onClick={(e) => {
                                                        setActiveSlide(+e.currentTarget.value);
                                                        setAdditionalSlider(false)
                                                    }}
                                                >
                                                    <div className='add-content'>
                                                        Add something else
                                                    </div>
                                                </button>
                                            }
                                            {i.slotText && <div className='slots-text'>{i.slotText}</div>}
                                        </React.Fragment>
                                    )
                                })
                            }
                            onChange={({oldIndex, newIndex}) =>
                                setItems(
                                    newIndex === -1
                                        ? arrayRemove(items, oldIndex)
                                        : arrayMove(items, oldIndex, newIndex)
                                )
                            }

                        />
                    </div>
                </Content>
                <button className='add-btn' onClick={() => {
                    closeModal();
                }}>
                    <div>Add slide</div>
                </button>
            </ComponentContainer>
            <AddLinkModal isOpen={addLinkModalToggle} closeModal={handleCloseModal}/>
            <AddMediaModal isOpen={addMediaModalToggle} closeModal={handleCloseModal}/>
            <AddButtonsModal isOpen={addButtonModalToggle} closeModal={handleCloseModal}/>
        </Modal>
    )
}

export default FeaturedContent;

