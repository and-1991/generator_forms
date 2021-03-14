import styled from 'styled-components';
import {colors} from "../basic";

export const FormControl = styled.div`
  position: relative;
  color: transparent;
  width: 100%;
  }
  > label {
    cursor: pointer;
    display: block;
    position: absolute;
    padding: 0 3px;
    top: 50%;
    left: 5px;
    background-color: transparent;
    transform: translate(0, -50%);
    color: ${colors.lightgray};
    transition: all 0.2s;
  }
    > input {
      border-radius: 5px;
      padding: 0 8px;
      height: 30px;
      display: block;
      box-sizing: border-box;
      outline: none;
      background: ${colors.white};
      width: 100%;
      font-family: inherit;
      cursor: pointer;
      &:focus + label, &:valid + label {
        top: 0;
        font-size: 14px;
        background-color: ${colors.white};
      }
    }
  }
`;
