import Modal from 'react-modal';
import React, {useState} from "react";
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
    img{
        width:18px;
        height:18px
    }
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Box = styled.div`
    max-width: 213px;
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
    &.small-box{
        max-width: 161px;
    }
`;
const Tabs = styled.div`
    margin: 32px 0;
`;
const TabsHeader = styled.div`
    margin-left: -3.5px;
    margin-right: -3.5px;
    display: flex;
    align-items: center;
`;
const Tab = styled.div`
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    padding-left: 3.5px;
    padding-right: 3.5px;
    cursor:pointer;
    p{
        margin: 0;
        padding:8px 16px;
        border: 1px solid transparent;
    }
     &.active{
            p{
                border-radius: 100px;
                border: 1px solid #7600ff;
                background-color: #ffffff;
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
    const [activeTab, setActiveTab] = useState(1);

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
                            {
                                tabsInfo.map(element => {
                                    return (
                                        <Tab
                                            key={element.id}
                                            onClick={() => setActiveTab(element.id)}
                                            className={activeTab === element.id ? "active" : null}
                                        >
                                            <p>
                                                {element.tab}
                                            </p>
                                        </Tab>
                                    )
                                })
                            }
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
                        <Box>View Contract On Etherscan</Box>
                        <Box className="small-box">View Content Source</Box>
                        <Box className="small-box">Token ID: 88557894…</Box>
                        <Box>Contract Address: 88557894…</Box>
                    </Footer>
                </div>
            </Modal>
    )
}

export default GalleryModal