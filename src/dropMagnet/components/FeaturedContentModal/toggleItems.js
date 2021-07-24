import React from "react";
import ContectGreySection from "../contectGreySection/ContectGreySection";
import styled from "styled-components";

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

const ToggleItems = ({additionalSlider, setAdditionalSlider, setAddLinkModalToggle, setAddMediaModalToggle, setAddButtonModalToggle}) => {
    return (
        <>
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

                            <button className='add-btn' onClick={() => setAdditionalSlider(!additionalSlider)}>
                                <div onClick={() => setAdditionalSlider(!additionalSlider)}>Add something else</div>
                            </button>

                            <div className='slots-text'>1/3 slots used</div>
                        </div>
                    </Content>
            }
        </>
    )
}

export default ToggleItems;