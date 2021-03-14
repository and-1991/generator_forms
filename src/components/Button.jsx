import React from 'react';
import styled from 'styled-components';
import {colors} from "../basic";

const StyledButton = styled.button`
  margin: 20px 0 10px;
  padding: 5px 15px;
  outline: none;
  background-color: ${colors.lightgray};
  border: 1px solid ${colors.black};
  cursor: pointer;
  border-radius: 3px;
  text-transform: capitalize;
  &:hover {
    background-color: ${colors.lightgrayHover};
  }
`;

const Button = ({ text = null, onClick = () => {}, type = 'button' }) => {
    return (
            <StyledButton onClick={onClick} type={type}>
                { text }
            </StyledButton>
    )
};

export default Button;
