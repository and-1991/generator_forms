import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  resize: none;
  width: 100%;
  height: 300px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    &:hover {
      background: #74c0fc;
    }
  }
`;

const TextArea = forwardRef((props, ref) => {
    return (
            <StyledTextArea ref={ref} {...props}/>
    )
})

export default TextArea
