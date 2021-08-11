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
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

Modal.setAppElement('#portal');

const ComponentContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    min-height: 90px;
    align-items: center;
    background-color: #292929;
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 1200;
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    padding: 0 7px;
    
    @media screen and (max-width: 360px) {
      padding: 0;
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

const Title = styled.div`
   background-color: #3C3C3C;
   border: 3px solid #1A1A1A;
   border-radius: 16px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
   max-width: 403px;
   width: 100%;
   margin: 0 auto;
   padding: 11px 0;
   position: relative;
   z-index: 9;
   top: 13px;      
`;

const SocialMediaLinks = styled.div`
    max-width: 342px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
`;

const SlideCard = styled.div`
   border: 3px solid #1A1A1A;
   margin-bottom: 16px;
   border-radius: 16px;
   background-color: #3C3C3C;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
   position: relative;
   font-weight: 400;
   color: #EAEAEA;
   width: 100%;
   max-width: 400px;
   margin: 0 auto;
   margin-bottom: 16px;
   min-height: 60px;
   padding: 0 8px;
   
   .content {
      width: 100%;
      max-width: 342px;
      background-color: #3c3c3c;
      padding: 16px 0;
      border-radius: 16px;
      margin: 0 auto;
   }
`;

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const QuoteItem = styled.div`
  
`;

function Quote({quote, index}) {
    const [activeSlide, setActiveSlide] = useState(0);
    console.log(setActiveSlide)
    return (
        <>
            <Title className='title'>{quote.title}</Title>

            <Draggable draggableId={quote.id} index={index}>
                {provided => (
                    <QuoteItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <SlideCard>
                            <div className='content' key={quote.id}>

                                {
                                    activeSlide === quote.id && quote.description &&
                                    <div className='description'>{quote.description}</div>
                                }

                                {activeSlide !== quote.id && quote.elementText && quote.elementText.map(text =>
                                    <ContectGreySection key={text} content={text}/>)}
                                <SocialMediaLinks>
                                    {
                                        quote.socialMediaIcons && quote.socialMediaIcons.map(img => <CircleIcon
                                            key={img}
                                            imgUrl={img} alt={"icon"} className='social-media'/>)
                                    }
                                </SocialMediaLinks>
                            </div>
                        </SlideCard>

                    </QuoteItem>
                )}
            </Draggable>
        </>
    );
}

const QuoteList = React.memo(function QuoteList({quotes}) {
    return quotes.map((quote, index) => (
        <Quote quote={quote} index={index} key={quote.id}/>
    ));
});

const FeaturedContent = ({isOpen, closeModal}) => {

    // const [additionalSlider, setAdditionalSlider] = useState(true);

    const [addLinkModalToggle, setAddLinkModalToggle] = useState(false);

    const [addMediaModalToggle, setAddMediaModalToggle] = useState(false);

    const [addButtonModalToggle, setAddButtonModalToggle] = useState(false);

    const handleCloseModal = () => {
        setAddButtonModalToggle(false);
        setAddMediaModalToggle(false);
        setAddLinkModalToggle(false);
    }

    const [items, setItems] = useState([

        {
            id: 'id-0',
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
            id: 'id-1',
            title: 'Slide Two',
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
            id: 'id-2',
            title: 'Slide Three',
            description: 'What shall we add?',
            addBtn: true,
            slotText: 'Slide is Empty'
        },
    ]);
    // const [dropped, setDropped] = useState(false);
    const [state, setState] = useState({quotes: items});
    console.log(setItems)

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const quotes = reorder(
            state.quotes,
            result.source.index,
            result.destination.index
        );

        setState({quotes});
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
                    }}/>
                </header>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="list">
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <QuoteList quotes={state.quotes}/>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>


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

