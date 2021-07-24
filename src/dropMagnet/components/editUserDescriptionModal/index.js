import Modal from 'react-modal';
import React from "react";
import styled from "styled-components";

Modal.setAppElement('#portal');

const ComponentContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61));
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 1200;
    padding: 0 41px;
    text-align: center;
    color: #ffffff;
    font-weight: 400;

    header {
      font-weight: 500;
      margin: 16px 0;          
    }
        
    textarea {
      background: none;
      resize: none;
      color: #EAEAEA;
      font-size: 16px;
      border: none;
      scrollbar-width: none;
      width: 100%;
      outline: none;
      height: 400px;
    }
    
    textarea::-webkit-scrollbar {
      display: none;
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
      bottom: 16px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
`;

const EditUserDescription = ({isOpen, closeModal, userDescription, setUserDescription}) => {

    return (
            <Modal
                closeTimeoutMS={200}
                isOpen={isOpen}
                onRequestClose={closeModal}
                className='sharing'
            >
                  <ComponentContainer>
                      <header>Edit Bio</header>
                      <textarea value={userDescription} onChange={(e) => setUserDescription(e.currentTarget.value)}/>
                      <button className='add-btn' onClick={closeModal}>
                          <div>Finish Editing</div>
                      </button>
                  </ComponentContainer>
            </Modal>
    )
}

export default EditUserDescription;