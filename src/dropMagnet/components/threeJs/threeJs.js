import React from "react";
import laptop from "../../assets/laptop.glb";
import styled from "styled-components";
import Modal from 'react-modal';

const ThreeWrapper = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   width:100%;
   height:100%;
   position:relative;
   flex-direction:column;
`;
const CloseButton = styled.button`
    color: #fff;
    font-size: 32px;
    background: transparent;
    border:none;
    outline: none;
    cursor:pointer;
    position: absolute;
    top: 30px;
    right: 32px;
    z-index: 9999;
`;
const OpenModalButton = styled.button`
    padding: 8px 16px;
    border-radius: 26px;
    background-color: #101010;
    color: #eaeaea;
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    border:none;
    outline: none;
    cursor: pointer;
    margin-top:40px;
`;
const StyledModal = styled(Modal)`
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;


const MyModal = (props) => {
    return (
        <StyledModal
            isOpen={props.isOpen}
            contentLabel="Example Modal"
            className="MODAL"
            appElement={document.getElementById('portal')}
        >

            <CloseButton onClick={props.onRequestClose}>&#10006;</CloseButton>
            <model-viewer
                style={{width: "100%", height: "100%"}}
                src={laptop}
                ar
                ar-modes="webxr scene-viewer quick-look"
                environment-image="neutral"
                auto-rotate
                camera-controls />
        </StyledModal>
    )
}

const Three = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
          <ThreeWrapper>
              <model-viewer
                  style={{width: "100%", height: "300px"}}
                  src={laptop}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  environment-image="neutral"
                  disable-zoom
                  auto-rotate
              />
              <OpenModalButton onClick={openModal}>Click to see it</OpenModalButton>
              <MyModal isOpen={modalIsOpen} onRequestClose={closeModal} className="MODALIK"/>
          </ThreeWrapper>
    )
}


export default Three