import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 164px;
  height: 36px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 -3px 0 rgba(37, 37, 37, 0.5), inset 0 -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  border: 1px solid;
  background-image: linear-gradient(180deg, rgba(24, 24, 24, 0.83) 0%, rgba(19, 19, 19, 0.83) 100%);
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin: 8px;
`;


const StyledButton = (props) => {
    return (
        <Button style={{borderColor: `${props.borderColor}`}}>
            {props.children}
        </Button>
    )
}

export default StyledButton