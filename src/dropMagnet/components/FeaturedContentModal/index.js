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
import NewMusicPlayer from "../musicPlayer/newMusicPlayer";

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

const icons = [
    discord,
    telegram,
    openSea,
    rarible,
    instagram,
];

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
   padding: 16px 8px 16px 8px;

   .content {
      width: 100%;
      max-width: 342px;
      background-color: #3c3c3c;
      padding: 16px 0;
      border-radius: 16px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`;

const ContentItem = styled.div`
    background-color: transparent;
    margin-bottom: 16px;
`;

const AddButton = styled.button`
  background: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
  border: 0.75px solid #000000;
  border-radius: 26px;
  width: 161px;
  padding: 8px 0;
  color: #EAEAEA;
  font-size: 18px;
  margin-top: 16px;
`;

const LinksButton = styled.button`
  background: linear-gradient(180deg, rgba(24,24,24,0.83) 0%, rgba(19,19,19, 0.83) 100%);
  border: 0.75px solid #000000;
  border-radius: 26px;
  width: 110px;
  padding: 8px 0;
  color: #EAEAEA;
  font-size: 18px;
`;

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};


const FeaturedContent = ({isOpen, closeModal}) => {

    const [addContent, setAddContent] = useState(false)

    // const [additionalSlider, setAdditionalSlider] = useState(true);

    const [addLinkModalToggle, setAddLinkModalToggle] = useState(false);

    const [addMediaModalToggle, setAddMediaModalToggle] = useState(false);

    const [addButtonModalToggle, setAddButtonModalToggle] = useState(false);

    const handleCloseModal = () => {
        setAddButtonModalToggle(false);
        setAddMediaModalToggle(false);
        setAddLinkModalToggle(false);
    }

    const itemsFromBackend = [
        {
            id: '9', content: <ContentItem>
                <ContectGreySection content='some content here'/>
                <ContectGreySection content='some content 2 here'/>
                <SocialMediaLinks>
                    {
                        icons.map(img => <CircleIcon
                            key={img}
                            imgUrl={img} alt={"icon"} className='social-media'/>)
                    }
                </SocialMediaLinks>
            </ContentItem>
        },
        {id: '8', content: <NewMusicPlayer/>},
    ];

    const additionalButtons = [
        {
            id: '10',
            content: <ContentItem>
                {
                    !addContent
                        ? <AddButton><div>Add something</div></AddButton>
                        : <>
                            <LinksButton>Links</LinksButton>
                            {/*<MediaButton>Media</MediaButton>*/}
                            {/*<Btns>Buttons</Btns>*/}
                          </>
                }
            </ContentItem>
        }

    ]

    const columnsFromBackend = {
        '1': {
            name: "slide one",
            items: itemsFromBackend
        },
        '2': {
            name: "slide two",
            items: additionalButtons
        },
        // "3": {
        //     name: "slide tree",
        //     items: []
        // }
    };

    const [columns, setColumns] = useState(columnsFromBackend);
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

                <DragDropContext
                    onDragEnd={result => onDragEnd(result, columns, setColumns)}
                >
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                                key={columnId + addContent}
                            >
                                <Title>{column.name}</Title>
                                <SlideCard>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    className='content'
                                                    style={{
                                                        // background: snapshot.isDraggingOver
                                                        //     ? "lightblue"
                                                        //     : "lightgrey",
                                                        padding: 4,
                                                        width: '100%',
                                                        minHeight: 100
                                                    }}
                                                >
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{

                                                                                ...provided.draggableProps.style
                                                                            }}
                                                                        >
                                                                            {item.content}
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </SlideCard>
                            </div>
                        );
                    })}
                </DragDropContext>
            </ComponentContainer>
            <AddLinkModal isOpen={addLinkModalToggle} closeModal={handleCloseModal}/>
            <AddMediaModal isOpen={addMediaModalToggle} closeModal={handleCloseModal}/>
            <AddButtonsModal isOpen={addButtonModalToggle} closeModal={handleCloseModal}/>
        </Modal>
    )
}

export default FeaturedContent;

