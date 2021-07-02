import Modal from 'react-modal';
import React, {useCallback, useState} from "react";
import "./galleryModal.scss";
import styled from "styled-components";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

Modal.setAppElement('#portal');


const Header = styled.div`
    width:fit-content;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 6px;
    background-color: #ffffff;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    @media(max-width: 520px){
        font-size: 20px;
    }
`;

const Close = styled.button`
    position:absolute;
    top:32px;
    left:32px;
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
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 10px;
    }
    img{
        width:18px;
        height:18px
    }
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -6px;
    margin-right: -6px;
    flex-wrap: wrap;
`;

const BoxWrap = styled.div`
    padding-left: 6px;
    padding-right: 6px;
;`

const Box = styled.div`
    width: 213px;
    height: auto;
    border-radius: 6px;
    background-color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    color: #000000;
    padding: 7px 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 6px;
    &.small-box{
        width: 161px;
    }
`;
const Tabs = styled.div`
    margin: 32px 0;
`;
const TabsHeader = styled.div`
    .edit-tabs{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: fit-content;
        label{
          display: flex;
          text-transform: capitalize;
          align-items: center;
          justify-content: center;
          width: 163px;
          height: 46px;
          border-radius: 100px;
          background-color: transparent;
          cursor: pointer;
          z-index: 2;
          color: #000000;
          margin: 0 3.5px;
          font-size: 24px;
          font-weight: 700;
          font-style: normal;
          letter-spacing: normal;
          line-height: normal;
          text-align: left;
          font-style: normal;
          letter-spacing: normal;
          line-height: normal;
          @media(max-width: 420px){
            width: 140px;
            height: 36px;
            font-size: 20px;
          }
          @media(max-width: 370px){
            width: 125px;
            font-size: 18px;
          }
        }
        input[type="radio"] {
          display: none;
        }
        input[id="1"] {
          &:checked {
            & ~ .glider {
              transform: translateX(0);
            }
          }
        }
        input[id="2"] {
          &:checked {
            & ~ .glider {
              transform: translateX(calc(100% + 7px));
            }
          }
        }
        .glider {
          position: absolute;
          display: flex;
          left: 0;
          align-items: center;
          justify-content: center;
          width: 163px;
          height: 46px;
          border-radius: 100px;
          border: 1px solid #7600ff;
          background-color: #ffffff;
          cursor: pointer;
          margin: 0 3.5px;
          z-index:1;
          transition: 0.25s ease-out;
           @media(max-width: 420px){
            width: 140px;
            height: 36px;
          }
          @media(max-width: 370px){
            width: 125px;
          }
        }
    }
`;
const TabContent = styled.div`
    margin-top:32px;
`;
const Textarea = styled.textarea`
    width: 100%;
    height: 288px;
    overflow-y: auto;
    resize: none;
    border: none;
    outline: none !important;
    border-radius: 6px;
    background-color: #ffffff;
    padding:28px;
    box-sizing:border-box;
    font-size: 24px;
    color: #000000;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    outline:none !important;
    @media(max-width: 520px){
    padding:20px;
    font-size: 20px;
    }
`;

const CollectWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width:fit-content;
    border-radius: 6px;
    background-color: #ffffff;
    padding: 8px 12px;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    cursor:pointer;
    @media(max-width: 520px){
        font-size: 20px;
    }
`;
const Collect = styled.div`
    display:flex;
    align-items:center;
    img{
        width: 14px;
        height: 14px;
        margin-left: 4px;
        margin-right:11px;
    }
`;
const Line = styled.div`
    width: 1.5px;
    height: 21px;
    background: #1d1d1d;
    border-radius: 100px;
    margin-right: 8px;
`;


const GalleryModal = ({isOpen, closeModal}) => {
    const tabsInfo = [
        {
            id: 1,
            tab: "Description",
            content: "This artwork is a beautiful mix of hand drawn illustration, AI neural compositing, trained from hours of custom artist-made iterations, projected on a mesh of a whale."
        },
        {
            id: 2,
            tab: "Provenance",
            content: "This artwork is a beautiful mix of hand drawn illustration, AI neural compositing."
        },
    ];
    const [activeTab, setActiveTab] = useState(tabsInfo[0].id);
    const handleChangeTab = useCallback((id) => setActiveTab(id), []);

    const handleChange = (value) => {

    }

    return (
            <Modal
                closeTimeoutMS={200}
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={`gallery-Modal`}
            >
                <div className="gallery-modal-content">
                    <Close onClick={closeModal}><img src={close} alt="close"/></Close>
                    <Header>[Title] by [Artist name]</Header>
                    <Tabs>
                        <TabsHeader>
                            <div className="edit-tabs">
                                {
                                    tabsInfo.map(element => {
                                        return (
                                            <React.Fragment key={element.id}>
                                                <label htmlFor={element.id}
                                                       onClick={() => handleChangeTab(element.id)}>{element.tab}</label>
                                                <input type="radio" id={element.id} name="tabs"
                                                       defaultChecked={element.id === activeTab}/>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <span className="glider"/>
                            </div>
                        </TabsHeader>
                        <TabContent>
                            <Textarea name="text" value={tabsInfo[activeTab-1].content} onChange={(e) => handleChange(e.target.value)}/>
                        </TabContent>
                    </Tabs>
                    <CollectWrapper>
                        <Collect>
                            <span>7</span>
                            <img src={menu} alt=""/>
                            <Line/>
                        </Collect>
                        <span>Collect</span>
                    </CollectWrapper>
                    <Footer>
                        <BoxWrap>
                            <Box>View Contract On Etherscan</Box>
                        </BoxWrap>
                        <BoxWrap>
                            <Box className="small-box">View Content Source</Box>
                        </BoxWrap>
                        <BoxWrap>
                            <Box className="small-box">Token ID: 88557894…</Box>
                        </BoxWrap>
                        <BoxWrap>
                            <Box>Contract Address: 88557894…</Box>
                        </BoxWrap>
                    </Footer>
                </div>
            </Modal>
    )
}

export default GalleryModal