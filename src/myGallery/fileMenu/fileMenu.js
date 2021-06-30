import React, {useState} from "react";
import arrow from "./arrow.svg"
import Cart from "./dropdownCard";
import styled from "styled-components";


const DropDown = styled.div`
  width: 84px;
  height: 36px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  background-color: #3e3e3e;
  padding: 8px 12px;
  position: absolute;
  z-index: 9999;
  top:8px;
  left:15px;
  transition: width .2s ease-in-out, height .2s ease-in-out, border-radius .2s ease-in-out;
  @media (max-width: 375px) and (max-height: 700px) {
        top: 12px;
        left: 13px;
    }
  .dropdown-btn{
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: transparent;
    padding: 0;
    margin: 0;
    p{
      margin: 0;
      color: #ffffff;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: left;
    }
    img{
      transition: transform 200ms ease-in-out;
      transform: rotate(180deg);
      margin-left: 6px;
    }
  }
  .dropdown-header{
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    margin-top: 0;
    margin-bottom: 13px;
    min-width: 274px;
  }
  .dropdown-content{
    opacity: 0;
  }
  &.dropped{
  transition: width .2s ease-in-out, height .2s ease-in-out, border-radius .2s ease-in-out;
  width: calc(100vw - 30px);
  height: calc(100vh - 16px);
  @media(min-width: 500px){
      width: calc(444px);
      height: calc(785px);
  }
  @media (max-width: 375px) and (max-height: 700px) {
        top: 12px;
        left: 13px;
        width: calc(100vw - 26px);
        height: calc(100vh - 24px);
    }
  border-radius: 8px;
    .dropdown-btn{
      img{
        transition: transform 200ms ease-in-out;
        transform: rotate(0deg);
      }
    }
    .dropdown-content{
      transition: opacity .57s ease-in-out .2s;
      height:100%;
      opacity: 1;
    }
  }
`;
const CardsContent = styled.div`
    max-height: calc(100% - 55px);
    overflow-y: auto;
`;


const FileMenu = () => {
    const [dropped, setDropped] = useState(false);

    const handleOpen = () => {
        setDropped(prevState => !prevState)
    }

    return (
        <DropDown className={dropped ? "dropped" : ""}>
            <button className="dropdown-btn" onClick={handleOpen}>
                <p>File</p>
                <img src={arrow} alt="arrow"/>
            </button>
            <div className="dropdown-content">
                <h2 className="dropdown-header">Me.link/AlexanderNewton</h2>
                <CardsContent>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                </CardsContent>
            </div>
        </DropDown>
    )
}

export default FileMenu